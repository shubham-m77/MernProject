const express=require('express');
const app=express();
const connectDB=require("./db.js");
require("dotenv").config();
const authRouter = require("./Routers/authRouter");
const contactRouter = require("./Routers/contact-router");
const adminRouter = require("./Routers/admin-router");
const serviceRouter = require("./Routers/service-router");
const errorMiddleware = require('./Validators/errorHandler.js');
const cors = require('cors'); 
const port=2000;


const corsOptions = {
  origin: 'https://shubhgraphix.onrender.com',
  methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
  Credentials:true,
}
app.use(cors(corsOptions));
app.use(errorMiddleware);
app.use(express.json());

app.use("/api/auth",authRouter);
app.use("/api/auth",serviceRouter);
app.use("/api/form",contactRouter);
app.use("/api/admin",adminRouter);
app.get('/',(req,res)=>{
res.send("<h1>Radha Radha</h1>");
});


connectDB().then(()=>{app.listen(port,()=>{
  console.log(`Server is running at Port:${port}`);
});});
