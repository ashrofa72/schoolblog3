import { connectToDatabase } from '../utils/mongodb';
import styles from '../styles/blogs.module.css';
import Image from 'next/image';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function BlogsPage({ blogs }) {
  const [deleting, setDeleting] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();
  // Delete post
  const deletePost = async (blogId) => {
    //change deleting state
    setDeleting(true);

    try {
      // Delete post
      await fetch('/api/studentinfo/', {
        method: 'DELETE',
        body: blogId,
      });
      console.log(blogId);
      // reset the deleting state
      setDeleting(false);
      // reload the page
      return router.push(router.asPath);
    } catch (error) {
      // stop deleting state
      return setDeleting(false);
    }
  };
  return (
    <div className={styles.container}>
      <h1>الأخبار والنشرات في المدرسة</h1>
      {blogs.length === 0 ? (
        <p className={styles.noblogsmessage}>No blogs available.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className={styles.blog}>
            <h2 className={styles.blogtitle}>{blog.title}</h2>
            <p className={styles.blogcontent}>{blog.content}</p>
            {blog.image && (
              <Image
                className={styles.blogimage}
                src={blog.image}
                alt={blog.title}
                width={500}
                height={200}
              />
            )}
            <button onClick={() => deletePost(blog['_id'])}>Delete</button>
            <p>{blog.image}</p>
          </div>
        ))
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const blogsCollection = db.collection('blog');
  const blogs = await blogsCollection.find({}).toArray();
  return {
    props: {
      blogs: JSON.parse(JSON.stringify(blogs)),
    },
  };
}
