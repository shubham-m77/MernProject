const mongoose=require("mongoose");
const URI = "mongodb+srv://shubham_m9022:Shubham123@shubhcluster.qcpc6.mongodb.net/register?retryWrites=true&w=majority&appName=ShubhCluster";
// require("dotenv").config();
// const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const connectDB= async()=>{
    try {
     await mongoose.connect(URI);
    //  await mongoose.connection.db.admin().command({ ping: 1 });
     console.log("Connection established");
    } catch (error) {
        console.error("Database connection failed",error);
        process.exit();
    }
}
module.exports=connectDB;