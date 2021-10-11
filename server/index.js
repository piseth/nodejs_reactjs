const express = require('express');
const bodyParser = require('body-parser');
const cors =require('cors');
const app = express();
const mysql = require('mysql')
const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'piseth@123',
    database:'nodejs'
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

app.post("/api/insert",(req,res)=>{

    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;
    const sqlInsert = "Insert into movie_reviews(movieName,movieReview) values (?, ?)";
    db.query(sqlInsert,[movieName,movieReview],(err,result)=>{
        console.log(result);
    });
});

app.get("/api/get",(req,res)=>{
    const sqlSelect = "Select * from movie_reviews";
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    });
    //res.send("Hello Express TEST");
});

app.listen(3001, ()=>{
    console.log("Running on port 3001");
});