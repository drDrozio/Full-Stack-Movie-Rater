// const TOKEN = 'c819b74eecd7115b00003389408f38a04fcf7ff9'

export default class API {

    static loginUser(body){
        return fetch(`http://127.0.0.1:8000/auth/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token`
            },
            body : JSON.stringify(body)
        })
        .then( resp => resp.json())
    }

    static registerUser(body){
        return fetch(`http://127.0.0.1:8000/app/users/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(body)
        })
        .then( resp => resp.json())
    }

    static updateMovie(movieid,body,token){
        return fetch(`http://127.0.0.1:8000/app/movies/${movieid}/`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['mrtoken']}`
            },
            body : JSON.stringify(body)
        })
        .then( resp => resp.json())
    }

    static createMovie(body,token){
        return fetch(`http://127.0.0.1:8000/app/movies/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['mrtoken']}`
            },
            body : JSON.stringify(body)
        })
        .then( resp => resp.json())
    }

    static deleteMovie(movieid,token){
        return fetch(`http://127.0.0.1:8000/app/movies/${movieid}/`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['mrtoken']}`
            }
        })
    }
}