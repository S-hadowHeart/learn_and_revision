import express from 'express';

const router = express.Router()

router.get("/",(req,res) => {
    res.json({message:"hello get"})
})

router.post("/" , (req,res) => {
    res.json({message: "hello post"})
})

export default router