import React, { useState, useEffect } from "react";
import './App.css';
import Axios from "axios";
function App() {

  const [movie, setMovieName] = useState('');
  const [review, setReview] = useState('');
  const [movieReviewList, setMovieReviewList] = useState([]);
  const [newReview, setNewReview] = useState('');

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((ressponse) => {
      setMovieReviewList(ressponse.data);
      //console.log(ressponse.data);
    });
  }, []);
  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      movieName: movie,
      movieReview: review
    });
    setMovieReviewList([
      ...movieReviewList,
      {
        movieName: movie, movieReview: review
      }]);
  };
  const deleteReview = (movie)=>{
    Axios.delete('http://localhost:3001/api/delete/'+movie);
  }
  const updateReview = (movie)=>{
    Axios.put('http://localhost:3001/api/update/',{
      movieName: movie,
      movieReview: newReview
    });
    setNewReview("");
  }
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

      {movieReviewList.map((val, index) => {
        return (
          <div key={index} className="card">
            <h1>{val.movieName}</h1>
            <p>{val.movieReview}</p>
            <button onClick={()=>{deleteReview(val.movieName)}}>Delete</button>
            <input type="text" id="updateInput" onChange={(e)=>{
              setNewReview(e.target.value)
            }}></input>
            <button onClick={()=>{updateReview(val.movieName)}}>Update</button>
          </div>
        );
      })
      }

    </div>
  );
}

export default App;
