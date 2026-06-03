import { prisma } from "../config/db.js"
import argon2  from "argon2";
import { generateToken } from "../untils/generatToken.js";

const registration = async (req,res)=> {
    const { name,email,password } = req.body;

    const userExists = await prisma.User.findUnique({
        where : { email: email }
    })

    if (userExists)
    {
        return res.status(400).json({error:"User already exists with"})
    }

    // hash password
    
    const hash = await argon2.hash(password)
    const user = await prisma.user.create({
        data:{
            name,
            email,
            password:hash,
        }
    })

    const token = generateToken(user.id , res)
    res.status(201).json({status : "success",data:{
        user:{
            id:user.id,
            name:name,
            email:email,
        },
        token
    }})


}


const login = async (req,res) => {
    const {email , password} = req.body

    const user = await prisma.User.findUnique({
        where: { email:email }
    })

    if(!user)
    {
        return res.status(401).json({error: "Invalid email or password"})
    }

    const isPaswordValid = await argon2.verify(user.password,password)

    if(!isPaswordValid)
    {
        return res.status(401).json({error: "Invalid email or password"})
    }

    const token = generateToken(user.id,res)

    res.status(200).json({
        status: "success",
        data :
        {
            user :
            {
                id : user.id,
                email: email,
            },
            token
        }
    })
}

const logout = async (req , res) => {
    res.cookie("jwt","",{
        httpOnly : true,
        secure : process.env.NODE_ENV === "production",
        sameSite : "strict",
        maxAge : 0, 
    })
    console.log("Cookie cleared");
    res.status(200).json({
        status : "success",
        message : "Logout successfully "
    })
}

export { registration,login, logout }