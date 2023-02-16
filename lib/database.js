import mongoose from "mongoose";

const dbConnection = (handler) => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res);
    }
    mongoose.set("strictQuery", false);

    await mongoose.connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    return handler(req, res);
};

export default dbConnection;