import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import categorieRouter from "./routes/categorie.route.js"
import scategorieRouter from "./routes/scategorie.route.js"
import articleRouter from "./routes/article.route.js"
import commandeRouter from "./routes/commande.route.js"
import usereRouter from "./routes/user.route.js"
import paniereRouter from "./routes/panier.route.js"
import cors from 'cors'
dotenv.config()
const app=express();
app.use(cors());
app.use(express.json());//snn il ne conprend pas req.body
//connexion à la base de donnees
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true})
.then(()=>{console.log("coneexion à la base de données réussie");})
.catch(err =>{
    console.log('Impossible de se connecter à la base de données',
    err);
    process.exit();
});
app.use('/api/categories',categorieRouter);
app.use('/api/scategories',scategorieRouter);
app.use('/api/articles',articleRouter);
app.use('/api/commandes',commandeRouter);
app.use('/api/users',usereRouter);
app.use('/api/paniers',paniereRouter);
app.get('/',function(req,res){ 
    res.send('page de demarrage')
})
app.listen(process.env.PORT,() =>{
    console.log(`Serveur run at port ${process.env.PORT}`)
})
//nzid app.use(.......)
//w import lvarbl creat