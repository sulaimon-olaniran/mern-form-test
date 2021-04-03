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

// export default async function handler(req, res) {
//   const { method } = req

//   await connectToDatabase()

//   switch (method) {

//     case 'GET':
//       try {
//         const pets = await User.find({}) /* find all the data in our database */
//         res.status(200).json({ success: true, data: pets })
//       } catch (error) {
//         res.status(400).json({ success: false })
//       }

//       break

//     case 'POST':
//       try {
//         const user = await User.create(
//           req.body
//         ) /* create a new model in the database */
//         res.status(201).json({ success: true, data: user })
//       } catch (error) {
//         res.status(400).json({ success: false })
//       }
//       break

//     default:
//       res.status(400).json({ success: false })

//       break
//   }
// }