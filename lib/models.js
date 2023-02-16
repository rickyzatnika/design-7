import mongoose from "mongoose";
const Schema = mongoose.Schema;

const users = new Schema({
    name: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    presence: {
        type: String,
        required: true,
    },

    createdAt: {
        type: String,
    },
});

mongoose.models = {};

const User = mongoose.model("Agoes", users);

export default User;
