import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl:{
        type: String,
        required: "File URL is required"
    },
    title:{
        type:String,
        required: "Title is required"
    },
    description:String,
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    comment:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment" //해당되는 레퍼런스 챠트를 
        }
    ]
});

const model = mongoose.model("Video", VideoSchema);
export default model;