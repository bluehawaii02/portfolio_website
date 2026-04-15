import Message from "../models/message.js";

export const CreateMessage = async(req, res) => {
    try {
        const { name, email, message } = req.body;

        if(!name||!email||!message){
            return res.status(400).json({
                message: "all fields are required!"
            })
        };

        const newMessage = new Message({
            name, 
            email, 
            message
        });

        await newMessage.save();

        res.status(200).json({
            message: "Message sent succesfully!"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}
