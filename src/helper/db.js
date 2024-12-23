import mongoose from "mongoose";
export const connectDB = async () =>{
    try {
       const {connection} = await mongoose.connect(process.env.DATABASE_URL,{
            dbName:'WorkManagerDb'
        });

        console.log("Database connected....😏😏",connection.host);




        
    } catch (error) {
        console.log('Failed to connect with Database 😥😥',error)
        
    }
}