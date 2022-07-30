import { MongoClient } from "mongodb";

// api/new-meetup

const Handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    console.log(data);

    const client = await MongoClient.connect(
      "mongodb+srv://sheharyark017:golaith@cluster0.ao5c8ar.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupCollection = db.collection("meetups");

    const result = await meetupCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default Handler;
