import mongoose from 'mongoose';

const connect = async(req, res)=>{
    try {
        const connecting = await mongoose.connect(process.env.MONGODB_URI);

        console.log("mongodb connected succesfully");
    } catch (error) {
        console.error(error);
    }
}

export default connect;