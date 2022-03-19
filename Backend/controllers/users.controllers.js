import express from 'express';
import mongoose from 'mongoose';
import User from '../models/user.js';
const router = express.Router();
export const getUsers = async (req, res) => { 
try {
const user = await
User.find();//joiture bl catID yjibli nomcateg wimagecatg aussi mch  kn catgId b .populate
res.status(200).json(user);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const getUserByID = async (req, res) => { 
try {
const user = await User.findById(req.params.id);
res.status(200).json(user);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const createUser = async (req, res) => {
//const newCategorie = new Categorie(req.body)
//const { nomscategorie, imagescat,categorieID} = req.body;
const newUser = new User(req.body)
try {
await newUser.save();
res.status(201).json(newUser );
} catch (error) {
res.status(409).json({ message: error.message });
}
}
export const updateUser= async (req, res) => {
const { id } = req.params;
const { name, email,telephone,password,createdAt,updatedAt} = req.body;
if (!mongoose.Types.ObjectId.isValid(id)) 
return res.status(404).send(`pas de client avec un id: ${id}`);
const user1 = { name:name,email:email, telephone:telephone,password:password,createdAt:createdAt,updatedAt:updatedAt,
_id: id};
await User.findByIdAndUpdate(id, user1);
res.json(user1);
}
export const deleteUser = async (req, res) => {
const { id } = req.params;
if (!mongoose.Types.ObjectId.isValid(id)) 
return res.status(404).send(`pas client avec l'ID: ${id}`);
await User.findByIdAndDelete(id);
res.json({ message: "user deleted successfully." });
}

