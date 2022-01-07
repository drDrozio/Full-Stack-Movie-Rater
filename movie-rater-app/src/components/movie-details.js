import React,{ useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useCookies } from 'react-cookie'

function MovieDetails(props){

    const [token] = useCookies(['mrtoken'])

    // const movieClicked = movie => evt => {
    //     props.movieClicked(movie)
    // }

    const [highlighted,setHighlighted] = useState(-1);

    const highlighter = high => evt => {
        setHighlighted(high)
    }

    const rating = rate => evt => {
        fetch(`http://127.0.0.1:8000/app/movies/${mov.id}/rate_movie/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token['mrtoken']}`
        },
        body : JSON.stringify({stars:rate+1})
        })
        .then( () => getDetails())
        .catch( error => console.log(error))
    }

    const getDetails = () => {
        fetch(`http://127.0.0.1:8000/app/movies/${mov.id}/`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token['mrtoken']}`
        },
        })
        .then( resp => resp.json())
        .then( resp => props.updateMovieRated(resp))
        .catch( error => console.log(error))
    }

    const mov = props.movie;

    return (
        <React.Fragment>
            {
                mov ? (
                    <div>
                        <h1>{mov.title}</h1>
                        <p>{mov.description}</p>
                        <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 0 ? 'orange':''}/>
                        <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 1 ? 'orange':''}/>
                        <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 2 ? 'orange':''}/>
                        <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 3 ? 'orange':''}/>
                        <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 4 ? 'orange':''}/>
                        ({mov.no_of_ratings})
                        <div className='rate-container'>
                            <h2>Rate It</h2>
                            {
                                [...Array(5)].map( (e,i) => {
                                    return <FontAwesomeIcon key={i} icon={faStar} className={highlighted > i-1 ? 'yellow':''}
                                        onMouseEnter={highlighter(i)}
                                        onMouseLeave={highlighter(-1)}
                                        onClick={rating(i)}/>
                                })
                            }
                        </div>
                    </div>
                ) : null
            }
        </React.Fragment>
    )
}
export default MovieDetails;