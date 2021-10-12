import React, { useState, useEffect } from "react";
import './App.css';
import Axios from "axios";
function App() {

  const [movie, setMovieName] = useState('');
  const [review, setReview] = useState('');
  const [movieReviewList, setMovieReviewList] = useState([]);
  alert("TEST");
  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((ressponse)=>{
      setMovieReviewList(ressponse.data);
      //console.log(ressponse.data);
    });
  },[]);
  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", { 
      movieName: movie, 
      movieReview: review 
    }).then(()=>{
      alert("Successful insert");
    });
  };
  return (
    <div className="form">
      <h1>CRUD Application</h1>
      <label>Movie name:</label>
      <input type="text" name="movieName" onChange={(e) => {
        setMovieName(e.target.value)
      }}></input>
      <label>Review:</label>
      <input type="text" name="review" onChange={(e) => {
        setReview(e.target.value)
      }}></input>
      <button onClick={submitReview}>Submit</button>

      {movieReviewList.map((val)=>{
        return (<h1 key={val.id.toString()} >MovieName: {val.movieName} | Review: {val.movieReview}</h1>);
      })}

    </div>
  );
}

export default App;
