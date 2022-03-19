import express from "express"
import {getUsers, createUser, getUserByID, updateUser, deleteUser} from '../controllers/users.controllers.js'
const router = express.Router();
router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUserByID);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
export default router