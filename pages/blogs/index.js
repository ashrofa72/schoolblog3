import { connectToDatabase } from '../../utils/mongodb';
import styles from '../../styles/blogs.module.css';
import Image from 'next/image';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function BlogsPage({ blogs }) {
  //const [deleting, setDeleting] = useState(false);
  // const [message, setMessage] = useState('');
  const router = useRouter();
  // handle detail
  const handledetail = async (blogId) => {
    router.push(`/blogs/id?_id=${blogId}`);
    console.log(blogId);
  };
  // Delete post
  const deleteBlog = async (blogId) => {
    console.log(blogId);
    // Make a request to the API endpoint.
    const response = await fetch(`/api/deleteDocument?id=${blogId}`, {
      method: 'DELETE',
    });

    // Check the response status code.
    if (response.status === 200) {
      // The document was deleted successfully.
    } else if (response.status === 404) {
      // The document was not found.
    } else {
      // An error occurred.
    }
  };
  return (
    <div className={styles.container}>
      <h1>الأخبار والنشرات الخاصة بالمدرسة</h1>
      {blogs.length === 0 ? (
        <p className={styles.noblogsmessage}>No blogs available.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className={styles.blog}>
            <h2 className={styles.blogtitle}>{blog.title}</h2>
            <p className={styles.blogcontent}>{blog.content}</p>
            <Link href={`/api/searchById?id=${blog._id}`}>
              {blog.image && (
                <Image
                  className={styles.blogimage}
                  src={blog.image}
                  alt={blog.title}
                  width={500}
                  height={200}
                />
              )}
            </Link>
            <div className={styles.buttons}>
              <button
                className={styles.uploadButton}
                onClick={() => handledetail(blog._id)}
              >
                التفاصيل
              </button>
              <button
                className={styles.uploadButton}
                onClick={() => deleteBlog(blog['_id'])}
              >
                حذف
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const blogsCollection = db.collection('blog');
  const blogs = await blogsCollection.find({}).sort({ _id: -1 }).toArray();
  return {
    props: {
      blogs: JSON.parse(JSON.stringify(blogs)),
    },
  };
}
