const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

// parser
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.88ffpvi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const database = client.db("express_js_DB");
const peopleCollection = database.collection("peoples");
const insertedPeopleCollection = database.collection("inserted_peoples");

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // GET API
    app.get("/inserted-peoples", async (req, res) => {
      const result = await insertedPeopleCollection.find().toArray();
      res.send(result);
    });

    // POST API
    app.post("/peoples", async (req, res) => {
      const people = req.body;

      const result = await insertedPeopleCollection.insertOne(people);

      res.send(result);
    });

    // DELETE API
    app.delete("/inserted-peoples/:id", async (req, res) => {
      const id = req.params.id;
      console.log("Delete API", id);
      const query = { _id: new ObjectId(id) };
      const result = await insertedPeopleCollection.deleteOne(query);
      console.log("Result", result);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.log);

const people = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    gender: "Male",
    age: 30,
    religion: "Christianity",
    occupation: "Software Engineer",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    gender: "Female",
    age: 28,
    religion: "Islam",
    occupation: "Data Analyst",
  },
  {
    id: 3,
    name: "Robert Brown",
    email: "robert.brown@example.com",
    gender: "Male",
    age: 35,
    religion: "Hinduism",
    occupation: "Doctor",
  },
  {
    id: 4,
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    gender: "Female",
    age: 27,
    religion: "Buddhism",
    occupation: "Graphic Designer",
  },
  {
    id: 5,
    name: "Michael Davis",
    email: "michael.davis@example.com",
    gender: "Male",
    age: 40,
    religion: "Christianity",
    occupation: "Teacher",
  },
  {
    id: 6,
    name: "Sophia Martinez",
    email: "sophia.martinez@example.com",
    gender: "Female",
    age: 32,
    religion: "Judaism",
    occupation: "Marketing Manager",
  },
  {
    id: 7,
    name: "Daniel Wilson",
    email: "daniel.wilson@example.com",
    gender: "Male",
    age: 29,
    religion: "Islam",
    occupation: "Mechanical Engineer",
  },
  {
    id: 8,
    name: "Olivia Taylor",
    email: "olivia.taylor@example.com",
    gender: "Female",
    age: 26,
    religion: "Hinduism",
    occupation: "Biologist",
  },
  {
    id: 9,
    name: "William Anderson",
    email: "william.anderson@example.com",
    gender: "Male",
    age: 33,
    religion: "Buddhism",
    occupation: "Financial Advisor",
  },
  {
    id: 10,
    name: "Emma Thomas",
    email: "emma.thomas@example.com",
    gender: "Female",
    age: 31,
    religion: "Christianity",
    occupation: "HR Manager",
  },
];

app.get("/", (req, res) => {
  res.send("Express Js Recap is Running");
});

app.get("/peoples", (req, res) => {
  res.send(people);
});

app.listen(port, () => {
  console.log(`Express JS Recap is listening on port : ${port}`);
});
