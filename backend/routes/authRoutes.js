import express from 'express'
const router = express.Router()


import {
    demo,
    userLogin,
    userSignUp,
    // getEmailForVerification
} from '../controller/authController.js'

// public routes 

// route for checking the server
router.get('/demo', demo)

// route for login 
router.post('/login', userLogin )

// route of SignUp 

router.post('/register', userSignUp)

// route for email verificaion 
// router.post('/getEmail',getEmailForVerification )


// protected routes



export default router;