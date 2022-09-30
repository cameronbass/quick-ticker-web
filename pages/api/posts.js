import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("quick_ticker_db");

  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let myPost = await db.collection("posts").insertOne(bodyObject);

      res.json(myPost.ops[0]);
      break;
    case "GET":
      const allPosts = await db
        .collection("posts")
        .find({})
        .toArray();

      res.json({ status: 200, data: allPosts });
      break;
  }
}
