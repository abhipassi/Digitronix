import express from 'express'
const router = express.Router()


import {
    demo,
    userLogin,
    userSignUp
} from '../controller/authController.js'

// public routes 

// route for checking the server
router.get('/demo', demo)

// route for login 
router.post('/login', userLogin )

// router of SignUp 

router.post('/register', userSignUp)


// protected routes



export default router;