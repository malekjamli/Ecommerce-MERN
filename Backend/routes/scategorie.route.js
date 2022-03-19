import express from "express"
import {getSCategories, createSCategorie, getSCategorieByID, getScategorieByCat,updateSCategorie, deleteSCategorie} from '../controllers/scategorie.controllers.js'
const router = express.Router();
router.get('/', getSCategories);
router.post('/', createSCategorie);
router.get('/:id', getSCategorieByID);
router.put('/:id', updateSCategorie);
router.delete('/:id', deleteSCategorie);
router.get('/cat/:categorieID', getScategorieByCat);//pour distinger les get
export default router