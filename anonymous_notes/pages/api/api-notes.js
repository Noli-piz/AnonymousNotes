// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "@/database/mongo";

export default async function handler(req, res) {
  let METHOD = req.method;
  const client = await clientPromise;
  const db = client.db("db_anonymousnotes");

  switch(METHOD){
    case "POST":
      const bodyObject = JSON.parse(req.body);
      let myPost = await db.collection("notes").insertOne(bodyObject);
      res.status(200).json({success : 'Successfully submitted!'});
      break;
    case "GET":
      const allPosts = await db.collection("notes").find({}).sort({'date' : 'desc'}).toArray();
      res.json({data: allPosts });
      break;
  }

}
