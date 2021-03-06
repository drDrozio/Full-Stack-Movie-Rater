import React, { useState,useEffect } from "react";
import API from '../api-service';
import { useCookies } from "react-cookie";

function MovieForm(props){

    const [ title,setTitle ] = useState('')
    const [ description,setDescription ] = useState('')
    const [token] = useCookies(['mrtoken'])

    useEffect(() => {
        setTitle(props.movie.title)
        setDescription(props.movie.description)
    },[props.movie])

    const updateClicked = () => {
        API.updateMovie(props.movie.id,{title : title, description : description},token)
        .then( resp => props.updateMovies(resp))
        .catch( err => console.log(err))
    }
    
    const createClicked = () => {
        API.createMovie({title : title, description : description},token)
        .then( resp => props.movieCreated(resp))
        .catch( err => console.log(err))
    }

    const isDisabled = title.length === 0 || description.length === 0

    return (
        <React.Fragment>
            {
                props.movie ? (
                        <div>
                            <h2>Edit {props.movie && props.movie.title} Here</h2>
                            <label htmlFor="title">Title</label><br/>
                            <input id="title" type="text" placeholder="title"
                                onChange={evt => setTitle(evt.target.value)}></input><br/>
                            <label htmlFor="description">Description</label><br/>
                            <textarea id="description" type="text" placeholder="description"
                                onChange={evt => setDescription(evt.target.value)}></textarea><br/>
                            {
                                props.movie.id ?
                                <button onClick={updateClicked} disabled={isDisabled}>Update</button> : 
                                <button onClick={createClicked} disabled={isDisabled}>Create</button>
                            }
                            
                        </div>
                ) : null
            }
        </React.Fragment>
    )
}
export default MovieForm;