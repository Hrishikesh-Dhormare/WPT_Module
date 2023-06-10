import { MongoClient } from "mongodb";

async function insertRecord(jsonDocument) {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  const db = client.db("mydb");
  const message = db.collection("message");

  await message.insertOne(jsonDocument);
  await client.close();

  console.log("Record Added Successfully");
}

async function readMessage(){
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    let db = client.db("mydb");
    let message = db.collection("message");

    let list = await message.find().toArray();
    console.log(list);

    await client.close();
}

async function main(){
    await readMessage();
}

main();
