import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        trim: true
    },
    productDescription:{
        type:String,
        required: true,
        trim:true
    },
    productPrice: {
        type:Number,
        required:true,
        trim:true
    },
    productStock:{
        type:Number,
        required: true,
        trim:true
    },
    productCategory:{
        type:String,
        required: true,
        trim:true
    },
    // productImageOne: {
    //     type:Bi
    // }
})