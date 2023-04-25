const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://duonghoanghiepp:h12042001@hiepduongg.zqnjxrf.mongodb.net/digiticket?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
});

client.connect((err, db) => {
    if (err) throw err;
    const dbo = db.db("digiticket");

        const obj = {name: "bat thai lan", price: "1.000.000"}

    dbo.collection("table").insertOne(obj, (err, result) => {
      if (err) throw err;

      console.log("Them thanh cong");
      console.log(result);

      db.close();
    });
  });
// console.log("check");
// module.exports = mongoDB;
