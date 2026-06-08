import express from 'express'
import { login, logout, registration } from '../controller/authController.js'
import { validateRequest } from '../middleware/validateRequest.js'
import { registerSchema,loginSchema } from '../validators/authValidators.js'


const router = express.Router()

router.post('/registration',validateRequest(registerSchema),registration)
router.post('/login',validateRequest(loginSchema),login)
router.post('/logout',logout)


export default router;