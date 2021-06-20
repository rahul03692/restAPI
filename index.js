const express=require("express");
const bodyParser=require("body-parser");

const mongoose=require("mongoose");

mongoose.connect('mongodb://localhost:27017/db', {useNewUrlParser: true});

const routes=require("./routes/api");
const { response } = require("express");

const app=express();


app.use(bodyParser.json());
app.use("/api",routes);

app.use(function(err,req,res,next){
    res.status(422).send({error:err.message});
});


app.listen(process.env.PORT || 5000,function(){
    console.log("server is running on 5000");
});
