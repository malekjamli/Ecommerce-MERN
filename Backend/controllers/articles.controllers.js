import express from 'express';
import mongoose from 'mongoose';
import Article from '../models/article.js';
const router = express.Router();

//get
export const getArticles = async (req, res) => { 
try {
const art = await
Article.find().populate("categorieID").populate("scategorieID").exec();
res.status(200).json(art);
} catch (error) {
res.status(404).json({ message: error.message });
}
}


//get by id
export const getArticleByID = async (req, res) => { 
try {
const art = await Article.findById(req.params.id);
res.status(200).json(art);
} catch (error) {
res.status(404).json({ message: error.message });
}
}

//post
export const createArticle = async (req, res) => {
/* const { reference, 
designation,prixAchat,prixVente,prixSolde,marque,qtestock,caracteris
tiques,imageartpetitf,imageartgrandf,categorieID,scategorieID} = 
req.body;*/
const newArticle = new Article(req.body)
try {
await newArticle.save();
res.status(201).json(newArticle );
} catch (error) {
res.status(409).json({ message: error.message });
}
}

//put
export const updateArticle= async (req, res) => {
const { id } = req.params;
const art= await Article.findByIdAndUpdate(id, req.body);
res.json(art);
}

//delete
export const deleteArticle = async (req, res) => {
const { id } = req.params;
if (!mongoose.Types.ObjectId.isValid(id))
return res.status(404).send(`pas dearticle avec l'ID: ${id}`);
const art=await Article.findByIdAndDelete(id);
//res.json({ message: `${art.reference} est supprimé` });
res.json({ message: `article supprimé` });
}