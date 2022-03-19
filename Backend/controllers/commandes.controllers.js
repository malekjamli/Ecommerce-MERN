import express from 'express';
import mongoose from 'mongoose';
import Commande from '../models/commande.js';
const router = express.Router();
export const getCommandes = async (req, res) => { 
try {
const com = await
Commande.find().populate("client").exec();//joiture bl catID yjibli nomcateg wimagecatg aussi mch  kn catgId b .populate
res.status(200).json(com);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const getCommandeByID = async (req, res) => { 
try {
const com = await Commande.findById(req.params.id);
res.status(200).json(com);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const createCommande = async (req, res) => {
//const newCategorie = new Categorie(req.body)
//const { nomscategorie, imagescat,categorieID} = req.body;
const newCommande = new Commande(req.body)
try {
await newCommande.save();
res.status(201).json(newCommande );
} catch (error) {
res.status(409).json({ message: error.message });
}
}
export const updateCommande= async (req, res) => {
const { id } = req.params;
const { paye, refcommande,client,dateAchat,mt_total} = req.body;
if (!mongoose.Types.ObjectId.isValid(id)) 
return res.status(404).send(`pas de commande avec un id: ${id}`);
const com1 = { paye:paye,refcommande:refcommande, client:client,dateAchat:dateAchat,
_id: id,mt_total:mt_total };
await Commande.findByIdAndUpdate(id, com1);
res.json(com1);
}
export const deleteCommande = async (req, res) => {
const { id } = req.params;
if (!mongoose.Types.ObjectId.isValid(id)) 
return res.status(404).send(`pas de commande avec l'ID: ${id}`);
await Commande.findByIdAndDelete(id);
res.json({ message: "commande deleted successfully." });
}

