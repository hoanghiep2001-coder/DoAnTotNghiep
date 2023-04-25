// import { ServerApiVersion } from "mongodb/lib/core";
// import MongoClient from "mongodb/lib/mongo_client";

const {MongoClient, ServerApiVersion} = require("mongodb")

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

function MongoDB() {
  const insertItemToCollection = (table = "", obj = {}) => {
    client.connect((err, db) => {
      if (err) throw err;
      const dbo = db.db("digiticket");

      dbo.collection(table).insertOne(obj, (err, result) => {
        if (err) throw err;

        console.log("Them thanh cong");
        console.log(result);

        db.close();
      });
    });
  };

  const updateItemToCollection = (table = "", oldObj = {}, newObj = {}) => {
    client.connect((err, db) => {
      if (err) throw err;
      const dbo = db.db("digiticket");

      const newValue = {
        $set: newObj,
      };

      dbo.collection(table).updateOne(oldObj, newValue, (err, objs) => {
        if (err) throw err;

        if (objs.length != 0) console.log("Cap nhat oke");
        console.log(objs);
        db.close();
      });
    });
  };

  const delItemFromCollection = (table = "", obj = {}) => {
    client.connect((err, db) => {
      if (err) throw err;
      const dbo = db.db("digiticket");

      const queryByName = { name: `${obj.name}` };
      const queryByPhone = { phone: `${obj.phone}` };
      let query;
      if (queryByName) {
        query = queryByName;
      } else {
        query = queryByPhone;
      }

      dbo.collection(table).deleteOne(query, (err, objs) => {
        if (err) throw err;

        if (objs.length != 0) console.log("Xoa oke");
        console.log(objs);
        db.close();
      });
    });
  };

  const getDataFromCollection = (table = "") => {
    client.connect((err, db) => {
      if (err) throw err;
      const dbo = db.db("digiticket");

      dbo
        .collection(table)
        .find()
        .toArray((err, objs) => {
          if (err) throw err;

          if (objs.length !== 0) {
            console.log("Lay du lieu oke");
            console.log(objs);
            db.close();
          }
        });
    });
  };

  const sortByName = (table = "", keyToSort = "") => {
    client.connect((err, db) => {
      if (err) throw err;
      const dbo = db.db("digiticket");

      const queryKey = {
        [keyToSort]: 1,
      };

      dbo
        .collection(table)
        .find()
        .sort(queryKey)
        .toArray((err, objs) => {
          if (err) throw err;

          if (objs.length != 0) console.log("Sap xep oke");
          console.log(objs);
          db.close();
        });
    });
  };
}

export default MongoDB;