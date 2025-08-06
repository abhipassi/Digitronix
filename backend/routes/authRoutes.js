import express from 'express'
const router = express.Router()

import {
    demo,
    userLogin,
    userSignUp,
    otpVerification,
    createCategory,
    showCategory,
    deleteCategory,
    updateCategory,
    addProducts
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
// route for email verification via OTP 
router.post('/otpVerification', otpVerification)

// route for creating category 
router.post('/createCategory', createCategory)

// route for getting category in response 
router.get('/showCategory', showCategory)

// route for deleting a category 
router.post("/deleteCategory", deleteCategory)

// route for category updation 
router.put("/updateCategory/:id", updateCategory)

router.post("/addProduct", addProducts)

export default router;