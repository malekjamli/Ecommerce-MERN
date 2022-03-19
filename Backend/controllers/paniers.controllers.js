import express from 'express';
import mongoose from 'mongoose';
import Panier from '../models/panier.js';
const router = express.Router();
export const getPaniers = async (req, res) => { 
try {
const panier = await
Panier.find().populate("refcommande").populate("refarticle").exec();//joiture bl catID yjibli nomcateg wimagecatg aussi mch  kn catgId b .populate
res.status(200).json(panier);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const getPanierByID = async (req, res) => { 
try {
const panier = await Panier.findById(req.params.id);
res.status(200).json(panier);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const createPanier = async (req, res) => {
//const newCategorie = new Categorie(req.body)
//const { nomscategorie, imagescat,categorieID} = req.body;
const newPanier = new Panier(req.body)
try {
await newPanier.save();
res.status(201).json(newPanier );
} catch (error) {
res.status(409).json({ message: error.message });
}
}
export const updatePanier= async (req, res) => {
const { id } = req.params;
const { qte_ach, remise,tot_ligne,refcommande,refarticle} = req.body;
if (!mongoose.Types.ObjectId.isValid(id)) 
return res.status(404).send(`pas de panier avec un id: ${id}`);
const panier1 = { qte_ach:qte_ach,remise:remise, tot_ligne:tot_ligne,
_id: id,refcommande:refcommande, refarticle:refarticle };
await Panier.findByIdAndUpdate(id, panier1);
res.json(panier1);
}
export const deletePanier = async (req, res) => {
const { id } = req.params;
if (!mongoose.Types.ObjectId.isValid(id)) 
return res.status(404).send(`pas de panier avec l'ID: ${id}`);
await Panier.findByIdAndDelete(id);
res.json({ message: "panier deleted successfully." });
}

