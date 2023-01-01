import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const dataSchema = mongoose.Schema({
    link: String,
    title: String,
    price: String,
    description: String
})

autoIncrement.initialize(mongoose.connection);
dataSchema.plugin(autoIncrement.plugin, 'data');

const data = mongoose.model('data', dataSchema);

export default data;