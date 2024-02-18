import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI!, {
            dbName: "helping_starters",
        })
        mongoose.set('debug', true);
        console.log(`Mongo DB connected!: ${conn.connection.host}`)
        mongoose.connection.on('connected', () => {
            console.log(`MongoDB connected: ${conn.connection.host}`);
        });
        
    }
    catch (error:any){
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB