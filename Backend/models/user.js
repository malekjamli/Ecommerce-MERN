import mongoose from "mongoose"

//import Commande from "./commande.js";
const userSchema=mongoose.Schema({
    name:{ type: String, required: true },
    email:{ type: String, required: true },
    telephone :{ type: Number, required: true },
    password :{ type: String, required: true },
    createdAt :{type: Date, required: false},
    updatedAt :{type: Date, required: false}

})

const User = mongoose.model('User', userSchema);
export default User

