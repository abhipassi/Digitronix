import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    categoryName :{
        type: String,
        required: true,
        trim: true
    },
    categoryDescription:{
        type:String,
        required: true,
        trim: true
    },
})

const category = mongoose.model("Category", categorySchema);
export default category;