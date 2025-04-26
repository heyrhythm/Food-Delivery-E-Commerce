// Import dependencies
const { MongoClient } = require('mongodb');
require('dotenv').config();

// Import the food list (from assets.js)
const { food_list } = require('Frontend/src/asset/assets.js'); // Adjust the path as per your file location

// MongoDB URI and database name
const uri = process.env.MONGO_URI;
const dbName = 'foodDeliveryApp';

const insertFoodData = async () => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Get the "foods" collection from the database
    const db = client.db(dbName);
    const foodsCollection = db.collection('foods');

    // Insert many food items into the collection
    const result = await foodsCollection.insertMany(food_list);
    console.log(`${result.insertedCount} documents were inserted`);

  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
};

// Run the function to insert data
insertFoodData();
