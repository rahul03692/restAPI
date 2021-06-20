const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const dotenv=require("dotenv");
const mongoose=require("mongoose");

dotenv.config({path:"./config.env"});

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true}).then(()=>console.log("DB successful"));


const routes=require("./routes/api");
const { response } = require("express");

const app=express();


app.use(cors());

app.use(bodyParser.json());
app.use("/api",routes);

app.use(function(err,req,res,next){
    res.status(422).send({error:err.message});
});


app.get('/',()=>{
    res.send("go to /api to see data");
})

app.listen(process.env.PORT || 5000,function(){
    console.log("server is running on 5000");
});
