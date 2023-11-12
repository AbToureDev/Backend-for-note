import cors from 'cors'
import express from 'express';
import 'reflect-metadata';
import { myDataSource } from "../app-data-source"
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());
app.use(cors())
myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })
app.use(cookieParser())

app.use('/note',require('../routes/note'))
app.use('/user',require('../routes/user'))
app.get('/', (req, res) => {
    res.send('Hello world');
})


const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})