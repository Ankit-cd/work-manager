import mongoose from "mongoose";

const config = {
    isConnected : 0,
}
export const connectDB = async () =>{
    if(config.isConnected){
        return;
    }
    try {
       const {connection} = await mongoose.connect(process.env.DATABASE_URL,{
            dbName:'WorkManagerDb'
        });

        console.log("Database connected....😏😏",connection.host);

        config.isConnected = connection.readyState;




        
    } catch (error) {
        console.log('Failed to connect with Database 😥😥',error)
        
    }
}