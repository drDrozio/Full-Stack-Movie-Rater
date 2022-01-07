import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import API from '../api-service'
import { useCookies } from 'react-cookie'

function MovieList(props){
    
    const [token] = useCookies(['mrtoken'])
    
    const movieClicked = movie => evt => {
        props.movieClicked(movie)
    }

    const editClicked = movie => {
        props.editClicked(movie);
    }
    
    const removeClicked = movie => {
        API.deleteMovie(movie.id,token)
        .then(() => props.removeClicked(movie))
        .catch(error => console.log(error))
        
    }
    
    console.log(props.movies)
    return (
        <div>
            <h2>Movie List</h2>
            {
                props.movies && props.movies.map(movie => {
                return (
                    <div key={movie.id} className='movie-item'>
                        <h3 onClick={movieClicked(movie)}>{movie.title}</h3>
                        <FontAwesomeIcon icon={faEdit} onClick={() => editClicked(movie)}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faTrash} onClick={() => removeClicked(movie)}></FontAwesomeIcon>
                    </div>
                )
                }) 
            }
        </div>
    )
}
export default MovieList;