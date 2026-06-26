const express = require("express");
require("dotenv").config();
const app = express();

const port = process.env.PORT

const dbConnect = require("./config/db")

const authRoutes = require("./routes/authRoutes");


dbConnect();

app.use(express.json())

app.use("/api/auth" , authRoutes)

app.listen(port || 3000 , ()=>{
    console.log(`server running as port ${port}`);
    
})