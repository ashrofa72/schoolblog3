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
    let mobile = req.query.mobile;
    let updatemobile = mobile.slice(3);
    console.log(updatemobile);

    let mobileuser = await db
      .collection('myschoolusers')
      .find({ mobile: updatemobile })
      .sort({ published: -1 })
      .toArray();
    return res.json({
      message: JSON.parse(JSON.stringify(mobileuser)),
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
