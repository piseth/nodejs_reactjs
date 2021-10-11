const express = require('express');
const app = express();
const mysql = require('mysql')
const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'piseth@123',
    database:'nodejs'
});

app.get("/insert",(req,res)=>{
    const sqlInsert = "Insert into movie_reviews(movieName,movieReview) values ('Iron Man', 'IM review')";
    db.query(sqlInsert,(err,result)=>{
        res.send("Hello TEST");
    });
    //res.send("Hello Express TEST");
});
app.get("/delete",(req,res)=>{
    const sqlInsert = "Insert into movie_reviews(movieName,movieReview) values ('Iron Man', 'IM review')";
    db.query(sqlInsert,(err,result)=>{
        res.send("Hello TEST");
    });
    //res.send("Hello Express TEST");
});
app.get("/update",(req,res)=>{
    const sqlInsert = "Insert into movie_reviews(movieName,movieReview) values ('Iron Man', 'IM review')";
    db.query(sqlInsert,(err,result)=>{
        res.send("Hello TEST");
    });
    //res.send("Hello Express TEST");
});
app.get("/select",(req,res)=>{
    const sqlInsert = "Insert into movie_reviews(movieName,movieReview) values ('Iron Man', 'IM review')";
    db.query(sqlInsert,(err,result)=>{
        res.send("Hello TEST");
    });
    //res.send("Hello Express TEST");
});
app.listen(3001, ()=>{
    console.log("Running on port 3001");
});