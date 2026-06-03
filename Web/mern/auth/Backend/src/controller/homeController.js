import { prisma } from "../config/db.js";

const home = async (req , res ) => {
    const userId = req.user;

    const user = await prisma.User.findUnique({
        where : {id : userId}
    })
    console.log(userId)
    if(!user)
    {
        return res.status(404).json({error : "User not Found "})
    }

    return res.status(200).json({ msg: `Welcome ${user.name}`, name : user.name , email : user.email })
   
}

export {home}