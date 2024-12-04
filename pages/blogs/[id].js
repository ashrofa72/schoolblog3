import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { connectToDatabase } from '../../utils/mongodb';
import styles from '../../styles/detailpage.module.css';
import { ObjectId } from 'mongodb';
import Image from 'next/image';

const BlogDetail = ({ posts }) => {
  const router = useRouter();
  const handleBack = () => {
    router.push('/blogs');
  };
  return (
    <div className={styles.container}>
      {posts.map((post, i) => (
        <div key={i}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>

          <Image src={post.image} width={400} height={300} alt={post.title} />
          <div>
            <button onClick={handleBack} className={styles.uploadButton}>
              عودة
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogDetail;
export async function getServerSideProps(ctx) {
  const _id = ctx.query._id;
  console.log(_id);
  const { db } = await connectToDatabase();
  const data = await db
    .collection('blog')
    .find({ _id: new ObjectId(_id) })
    .toArray();
  const posts = JSON.parse(JSON.stringify(data));
  console.log({ posts });
  return {
    props: {
      posts: posts,
    },
  };
}
