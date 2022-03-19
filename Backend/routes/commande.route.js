import express from "express"
import {getCommandes, createCommande, getCommandeByID, updateCommande, deleteCommande} from '../controllers/commandes.controllers.js'
const router = express.Router();
router.get('/', getCommandes);
router.post('/', createCommande);
router.get('/:id', getCommandeByID);
router.put('/:id', updateCommande);
router.delete('/:id', deleteCommande);
export default router