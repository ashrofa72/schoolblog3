import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../../utils/mongodb';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { id } = req.query;

    try {
      const { db } = await connectToDatabase();

      // Convert the ID to ObjectId
      //const objectId = new ObjectId(id);
      console.log(id);

      // Delete the document by its ID
      const result = await db
        .collection('blog')
        .deleteOne({ _id: new ObjectId(id) });

      if (result.deletedCount === 1) {
        res.status(200).json({ message: 'Document deleted successfully' });
      } else {
        res.status(404).json({ message: 'Document not found' });
      }
    } catch (error) {
      console.error('Error deleting document:', error);
      res
        .status(500)
        .json({ message: 'An error occurred while deleting the document' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
