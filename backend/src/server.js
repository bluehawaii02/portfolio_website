import express from 'express';
import connecting from '../src/config/database.js';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/message.js';

dotenv.config();
connecting();

const app = express();

app.use(cors({
    origin: "*"
}));
app.use(express.json());
app.use("/messages", router);
app.use("/projects", router);

const PORT = process.env.PORT||8402;

app.get("/", (req, res)=>{
    res.send("hello from your server!")
})

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
});

