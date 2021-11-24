import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      !name.trim() === "" ||
      !message ||
      !message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }

    const newMessage = {
      email,
      name,
      message
    };

    let client;
    try {
      const DB = process.env.DATABASE.replace(
        "<password>",
        process.env.PASSWORD
      );
      client = await MongoClient.connect(DB);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Connection to database failed 😥" });
    }

    const db = await client.db();

    try {
      const result = await db.collection("responses").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      return res.status(500).json({ message: "Couldn't add to database 😿" });
    }

    client.close();

    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  }
}
export default handler;
