const mongoose = require("mongoose");
const dbConnect = async ()=>{
    try{
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(`db connected to : ${connect.connection.host},${connect.connection.name}`);
    }catch(e){
        console.log(e);
        process.exit(1);
    }
};
module.exports = dbConnect;