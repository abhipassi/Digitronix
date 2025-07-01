import express from 'express'
const router = express.Router()


import {
    demo
} from '../controller/authController.js'

router.get('/demo', demo)


export default router;