const { Movie, Actor, Director} = require('../db');
const movies = require('../../mockdata/movies')


//100 movies to load
//15 directors- 6 movies each
//70 actors- 1 y 2 movies each


async function loadMovies(){
  
    let res=movies.map(async(m)=>{
    const newMovie = await Movie.create({
        name: m.name,
        released_date: m.released_date,
        language: m.language,
        country: m.country,
        genre: m.genre,
        description: m.description
    })
    
    return console.log("movie added", newMovie.id)

    })
    return res

}

module.exports = loadMovies