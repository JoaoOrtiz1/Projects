const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
var bodyParser = require("body-parser");
const Posts = require("./Posts.js");
const ReactDOM = require("react-dom");

mongoose.connect("mongodb+srv://servermongodb",{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    console.log("logado com sucesso");
}).catch((err)=>{
    console.log(err.menssage)
})

app.engine("html",require("ejs").renderFile);
app.set("view engine", "html");
app.use("/public",express.static(path.join(__dirname,"public")));
app.set("views",path.join(__dirname,"/pages"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get("/", (req,res)=>{
    if(req.query.busca == null){
        Posts.find({}).sort({"_id":+1}).exec((err,posts)=>{
            posts = posts.map((val)=>{
                return{
                titulo: val.titulo,
                conteudo: val.conteudo,
                imagem: val.imagem,
                slug: val.slug,
                categoria: val.categoria,
                descri: val.descri,
                autor: val.autor,
                views: val.views
                }
            });
            var postc = posts.length;
            Posts.find({}).sort({'views': -1}).limit(5).exec((err,postsTop)=>{
                postsTop = postsTop.map((val)=>{
                    return {
                        titulo: val.titulo,
                        conteudo: val.conteudo,
                        descri: val.descri,
                        imagem: val.imagem,
                        slug: val.slug,
                        categoria: val.categoria,
                        views: val.views
                    }
                })
                res.render("home",{posts:posts,postc:postc,postsTop:postsTop});
            });
        });
    }else{
        Posts.find({titulo:{$regex:req.query.busca,$options:"i"}},(err,posts)=>{
            res.render("busca",{posts:posts});
        });
    }
});

app.get("/:slug",(req,res)=>{
    Posts.findOneAndUpdate({slug:req.params.slug},{$inc:{views:1}},{new: true},(err,resposta)=>{
        if(resposta != null){
        Posts.find({}).sort({'views': -1}).limit(5).exec((err,postsTop)=>{
            postsTop = postsTop.map((val)=>{
                return {
                    titulo: val.titulo,
                    conteudo: val.conteudo,
                    descri: val.descri,
                    imagem: val.imagem,
                    slug: val.slug,
                    categoria: val.categoria,
                    views: val.views
                }
            });
            res.render("single",{noticia:resposta,postsTop:postsTop});
        });
        }else if(req.params.slug == "contato"){
            res.render("contato");
        }else if(req.params.slug == "mais-lidas"){
            Posts.find({}).sort({'views': -1}).limit(7).exec((err,maisLidas)=>{
                maisLidas = maisLidas.map((val)=>{
                    return {
                        titulo: val.titulo,
                        conteudo: val.conteudo,
                        descri: val.descri,
                        imagem: val.imagem,
                        slug: val.slug,
                        categoria: val.categoria,
                        views: val.views
                    }
                });
                res.render("mais-lidas",{maisLidas:maisLidas});
            });
        }else{
            Posts.find({}).sort({'_id': +1}).limit(7).exec((err,menuPage)=>{
                if(req.params.slug == "tecnologia"){
                    menuPage = menuPage.map((val)=>{
                        return {
                                titulo: val.titulo,
                                conteudo: val.conteudo,
                                descri: val.descri,
                                imagem: val.imagem,
                                slug: val.slug,
                                categoria: val.categoria,
                                views: val.views,
                                nLimit: 3,
                                nStart: 0,
                                catTitulo:"Tecnologia"
                        }
                    });
                    res.render("menuPage",{menuPage:menuPage});
                }else{
                    menuPage = menuPage.map((val)=>{
                        return {
                                titulo: val.titulo,
                                conteudo: val.conteudo,
                                descri: val.descri,
                                imagem: val.imagem,
                                slug: val.slug,
                                categoria: val.categoria,
                                views: val.views,
                                nLimit: 7,
                                nStart: 3,
                                catTitulo:"Programação"
                        }
                    });
                    res.render("menuPage",{menuPage:menuPage});
                }
            });
        }
    })
})




app.listen(4000,()=>{
    console.log("server rodando!")
});




