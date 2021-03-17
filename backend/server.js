const express=require("express");
const cors = require('cors');
const mongoose=require("mongoose");
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const userrouter=require('./router/user')

const app=express()
const port=process.env.PORT||5000;

app.use(express.json())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({origin: 'http://localhost:3000'}));


app.use("/api",userrouter)

const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{


    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
});

const connection=mongoose.connection;

connection.once('open',()=>{
    console.log("mongo db connected successfully");
})

app.listen(port,()=>{
    console.log(`Server is running in port:${port}`)
})