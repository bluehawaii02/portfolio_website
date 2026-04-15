import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: String,
    likes: {
        type: Number,
        default: 0
    },
    dislikes:{
        type: Number,
        default: 0
    }
})

const project = mongoose.model("project", projectSchema);

export default project;