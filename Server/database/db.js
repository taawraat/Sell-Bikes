import mongoose from "mongoose";

const connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.lx4nks0.mongodb.net/?retryWrites=true&w=majority`;

    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("connected to db!");
    } catch (error) {
        console.log("Error while connection with database ", error);
    }
}

export default connection;