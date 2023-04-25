const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://duonghoanghiepp:h12042001@hiepduongg.zqnjxrf.mongodb.net/digiticket?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
});

const connectDB = async () => {
  try {
    await client.connect((err, db) => {
      if (err) throw err;
      const dbo = db.db("digiticket");

      console.log("oke roi nhe");
    });
  } catch (err) {
    console.error("loi roi");
    process.exit(1);
  }
};

connectDB();

const app = express();

app.get("/", (req, res) => res.send("Hello"));

const PORT = 5000;

app.listen(PORT, () => console.log("Server start on port 5000"));
