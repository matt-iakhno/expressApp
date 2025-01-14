const { MongoClient, ObjectId } = require('mongodb');

// MongoDB Atlas connection string (replace <password> and <cluster>)
const MONGODB_URL = process.env.MONGODB_URL;
const DB_NAME = process.env.MONGO_DB_NAME;
const COLLECTION_NAME = "videos";

let client;

// Ensure the MongoClient is reused for performance
async function getMongoClient() {
  console.log('getMongoClient called!');
  if (!client) {
    client = new MongoClient(MONGODB_URL);
    await client.connect();
  }
  return client;
}

async function getMongoTime(req, res) {
  console.log('getMongoTime called');
  try {
    const client = await getMongoClient();
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);
    // Look up the video by ID
    const video = await collection.findOne({ _id: new ObjectId("000000000000000000000000") });

    if (!video) {
      return res.status(404).json({ error: 'Could not query Mongo' });
    }
    const currTime = new Date().toISOString();
    return res.status(200).json(currTime);
  } catch (error) {
    console.error('Error fetching video:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }

}

async function getVideoById(req, res) {
  const { id } = req.params;

  try {
    const client = await getMongoClient();
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Look up the video by ID
    const video = await collection.findOne({ _id: new ObjectId(id) });

    if (!video) {
      return res.status(404).json({ error: 'Video not found' });
    }

    return res.status(200).json(video);
  } catch (error) {
    console.error('Error fetching video:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getMongoTime,
  getVideoById,
};