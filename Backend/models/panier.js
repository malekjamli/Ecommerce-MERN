import mongoose from "mongoose"
import Article from "./article.js";
import Commande from "./commande.js";
const panierSchema=mongoose.Schema({
    qte_ach:{ type: Number, required: true },
    remise:{ type: Number, required: true },
    tot_ligne :{ type: Number, required: true },
    refarticle :{type:mongoose.Schema.Types.ObjectId,ref:Article},
    refcommande:{type:mongoose.Schema.Types.ObjectId,ref:Commande}
    

})

const Panier = mongoose.model('Panier', panierSchema);
export default Panier




