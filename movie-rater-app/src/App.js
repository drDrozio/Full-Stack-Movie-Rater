import './App.css';
import { useState, useEffect } from 'react';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';
import MovieForm from './components/movie-form';
import { useCookies } from 'react-cookie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons';

function App() {
//
  const [movies,setMovies] = useState([]);
  const [selectedMovie,setSelectedMovie] = useState(null);
  const [editedMovie,setEditedMovie] = useState(null);
  const [token] = useCookies(['mrtoken'])

  useEffect(() => {
    fetch("http://127.0.0.1:8000/app/movies/",{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token['mrtoken']}`
      }
    })
    .then( resp => resp.json())
    .then( resp => setMovies(resp))
    .catch( error => console.log(error))
  },)

  // const movieClicked = movie => {
  //   console.log(movie.title);
  //   setSelectedMovie(movie);
  // }

  const editClicked = movie => {
    setEditedMovie(movie);
    setSelectedMovie(null);
  }

  const loadMovie = movie => {
    setSelectedMovie(movie);
    setEditedMovie(null);
  }

  const updateMovies = movie => {
    const newMovies = movies.map( mov => {
      if(mov.id === movie.id){
        return movie
      }
      return mov
    })
    setMovies(newMovies)
  }

  const newMovie = () => {
    setEditedMovie({title:'',description:''})
    setSelectedMovie(null)
  }

  const movieCreated = movie => {
    const newMovies = [...movies,movie]
    setMovies(newMovies) 
  }

  const removeClicked = movie => {
    const newMovies = movies.filter(mov => mov.id !== movie.id)
    setMovies(newMovies)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <FontAwesomeIcon icon={faFilm}/>
          <span>Movie Rater</span>
        </h1>  
      </header>
      <div className="layout">
        <div>
          <MovieList movies={movies} movieClicked={loadMovie} editClicked={editClicked} removeClicked={removeClicked}/>
          <button onClick={newMovie}>Add Movie</button>
        </div>
        <MovieDetails movie={selectedMovie} updateMovieRated={loadMovie}/>
        { editedMovie ? <MovieForm movie={editedMovie} updateMovies={updateMovies} newMovie={newMovie} movieCreated={movieCreated}/> : null}
        
      </div>
    </div>
  );
}

export default App;
