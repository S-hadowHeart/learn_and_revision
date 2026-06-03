import express from 'express'
import { login, logout, registration } from '../controller/authController.js'

const router = express.Router()

router.post('/registration',registration)
router.post('/login',login)
router.get('/logout',logout)


export default router;