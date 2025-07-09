import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname :{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type:String,
        required: true,
        trim: true
    },
    password:{
        type:String,
        required: true,
    },
    verificationCode:{
        type:String,
        required: true
    }
})

const User = mongoose.model("Users", userSchema);
export default User;
