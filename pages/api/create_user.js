import {connectToDatabase} from '../../util/mongodb'
//import User from '../../../models/UserModel'




export default async (req, res) => {
    const { db } = await connectToDatabase();
    const users = await db
      .collection("users")
      .insertOne(req.body)


    res.json("User Successfully Created");
  };
