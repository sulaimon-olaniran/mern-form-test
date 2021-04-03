import {connectToDatabase} from '../../util/mongodb'
//import User from '../../../models/UserModel'




export default async (req, res) => {
    const { db } = await connectToDatabase();
    const users = await db
      .collection("users")
      //.save({name : "Baba Sulaimon"})
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray();
    res.json(users);
  };