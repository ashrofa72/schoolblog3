import { connectToDatabase, cloudinary } from '../../utils/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, content, image } = req.body;

    // Validate the form data if needed

    // Upload image to Cloudinary
    const { secure_url } = await cloudinary.uploader.upload(image, {
      folder: 'uploads',
    });

    // Save the blog to MongoDB with the Cloudinary image URL
    const { db } = await connectToDatabase();
    const blogsCollection = db.collection('blog');
    const result = await blogsCollection.insertOne({
      title,
      content,
      image: secure_url,
    });

    res.status(200).json({ message: 'Blog saved successfully!' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
