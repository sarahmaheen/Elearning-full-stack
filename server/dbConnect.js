import mongoose from "mongoose";
async function dbConnect(){
    try {
        await mongoose.connect('mongodb+srv://lms:lms-2023@cluster0.7cmowhy.mongodb.net/lms-learning');
        console.log('Mongo DB connected successfully');
    } catch (error) {
        console.error("connection failed");
    }
}
dbConnect();




// import mongoose from "mongoose";
// import config from "config";

// async function dbConnect() {
//     const mongoUrl = config.get("MONGO_URL");

//     try {
//         // await mongoose.connect(mongoUrl, {
//         //     useNewUrlParser: true,
//         //     useUnifiedTopology: true,
//         // });
//         await mongoose.connect(mongoUrl);
//         console.log('MongoDB connected successfully');
//     } catch (error) {
//         console.error("MongoDB connection failed:", error.message);
//     }
// }

// export default dbConnect;
