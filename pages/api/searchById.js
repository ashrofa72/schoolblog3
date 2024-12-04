// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { connectToDatabase } = require('../../utils/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET': {
      return getPosts(req, res);
    }
  }
}

// Getting all posts.
async function getPosts(req, res) {
  try {
    let { db } = await connectToDatabase();
    let { id } = req.query;
    let post = await db
      .collection('blog')
      .find({ _id: new ObjectId(id) })
      .sort({ published: -1 })
      .toArray();
    return res.json({
      message: JSON.parse(JSON.stringify(post)),
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
