import { MongoClient } from 'mongodb';
const { connectToDatabase } = require('../../utils/mongodb');

const mongoURI =
  'mongodb+srv://ashrofa72:Ashraf330663@mernapp.5wrilan.mongodb.net/?retryWrites=true&w=majority';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      let { db } = await connectToDatabase();
      await db.collection('teachers').insertOne(JSON.parse(req.body));
      return res.json({
        message: 'User Data added successfully',
        success: true,
      });
    } catch (error) {
      return res.json({
        message: new Error(error).message,
        success: false,
      });
    }
  }
}
