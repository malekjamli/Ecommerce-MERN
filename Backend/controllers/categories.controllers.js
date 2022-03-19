import Categorie from "../models/categorie.js";//pour pouvoir faire CRUD
import mongoose from "mongoose"
//*********************** GET *****************
export const getCategories = async (req, res) =>{
    try {
        const cat = await Categorie.find();
        res.status(200).json(cat);
        

    }catch (error){
        res.status(404).json({ message: error.message});
    }
}
//********************************  POST *****************************
export const createCategorie = async (req, res) =>{
    const {nomcategorie, imagecategorie} = req.body;
    const newCategorie = new Categorie({ nomcategorie:nomcategorie, imagecategorie:imagecategorie})
    //const newCategorie = new Categorie(req.body)
    try{
        await newCategorie.save();
        res.status(201).json(newCategorie);

    }catch (error){
        res.status(401).json({ message: error.message});
    }
}
// *****************get avec param :id************************
export const getCategorieByID = async (req, res) =>{
    try {
        const cat = await Categorie.findById(req.params.id);//il cherche la categorie selon req.params 
        res.status(200).json(cat);
        

    }catch (error){
        res.status(404).json({ message: error.message});
    }

}
//***************************** PUT param :id*****************************
export const updateCategorie = async (req, res) =>{
    const { id } = req.params;
const { nomcategorie, imagecategorie} = req.body;//les nouveaux valo à partir de ce qu'on ecrit par clavier
if (!mongoose.Types.ObjectId.isValid(id)) //s'il ne trouve pas l'id return error
return res.status(404).send(`pas de categorie avec un id: ${id}`);
const cat1 = { 
nomcategorie:nomcategorie,imagecategorie:imagecategorie, _id: id };//snn  nbadelhom
await Categorie.findByIdAndUpdate(id, cat1);//je vais chercher et je vais le modifier par le var const1
res.json(cat1);


}
//**********************DELETE*******************
export const deleteCategorie = async (req, res) => {
    const { id } = req.params;//car {} temchy snn req.params.id
    if (!mongoose.Types.ObjectId.isValid(id)) 
    return res.status(404).send(`pas de categorie avec l'ID: ${id}`);
    await Categorie.findByIdAndDelete(id);
    res.json({ message: "categorie deleted successfully." });
    }
