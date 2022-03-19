import mongoose from "mongoose"
import User from "./user.js";
const commandeSchema=mongoose.Schema({
    refcommande:{ type: String, required: true,unique:true },
    paye :{type: Boolean, required: false},
    client :{type:mongoose.Schema.Types.ObjectId,ref:User},
    dateAchat :{type: Date, required: false},
    mt_total :{ type: Number, required: true }

})

const Commande = mongoose.model('Commande', commandeSchema);
export default Commande



