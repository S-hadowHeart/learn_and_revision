import jwt from "jsonwebtoken"
import { prisma } from "../config/db.js"
import { error } from "node:console";

export const authMiddleware = async (req,res , next) => {
    let token ; 

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer"))
    {
        token = req.headers.authorization.split(" ")[1];
    }
    else if(req.cookies?.jwt)
    {
        token = req.cookies.jwt;
    }

    if (!token) {
        return res.status(401).json({error : "Not authorized , no token provided"})
    }

    try {
        const decoded = jwt.verify(token , process.env.JWT_SECRET)
        const user = await prisma.User.findUnique(
            {
                where : {id : decoded.id}
            }
        )

        if (!user)
        {
            return res.status(404).json({error : "User no longer exists"})
        }
        req.user = user.id
        next();
    }
    catch(err)
    {
        return res.status(401).json({error : "not Authorized , token failed"})
    }
}