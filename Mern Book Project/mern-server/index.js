const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('START TO MERN PROJECT!');
});

// MongoDB Configuration
const uri = "mongodb://localhost:27017/BookClub";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Create a Collection of documents
    const bookCollection = client.db("BookInventory").collection("books");

    // Insert a book into the Database using POST method
    app.post("/upload-book", async (req, res) => {
      try {
        const data = req.body;
        const result = await bookCollection.insertOne(data);
        res.send(result);
      } catch (error) {
        console.error("Error inserting data:", error);
        res.status(500).send("Error inserting data");
      }
    });

    // get all books from the database
    // app.get("/all-books", async(req, res) =>{
    //   const books = bookCollection.find();
    //   const result = await books.toArray();
    //   res.send(result);
    // })

    // update a book data : patch or update methods
    app.patch("/book/:id", async(req, res) =>{
      const id = req.params.id;
      // console.log(id);
      const updateBookData = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = { upsert: true };
     
      const updateDoc = {
          $set: {
              ...updateBookData
         }
      }

      // update
      const result = await bookCollection.updateOne(filter, updateDoc, options );
      res.send(result);
    })

    // delete a book data
    app.delete("/book/:id", async(req, res) =>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await bookCollection.deleteOne(filter);
      res.send(result);
    })

    // find by category
    app.get("/all-books", async(req, res) =>{
      let query = {};
      if(req.query?.category){
        query = {category: req.query.category}
      }
      const result = await bookCollection.find(query).toArray();
      res.send(result);
    })

    // to get single book data
    app.get("/book/:id", async(req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id)};
      const result = await bookCollection.findOne(filter);
      res.send(result);
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}

// Start the server and keep the MongoDB connection open
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
