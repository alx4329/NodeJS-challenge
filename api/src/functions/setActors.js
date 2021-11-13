const { Movie, Actor, Director} = require('../db');

async function setActors(){
    const movies = await Movie.findAll();
    const actors = await Actor.findAll();

    let actCounter = 1;
    console.log('seteando')

    // console.log(movies)
    movies.forEach(movie => {
        // console.log(movie)
        for (let i=0; i<4; i++){
            // console.log(movie)
            console.log(actors[actCounter])
            movie.addActor(actors[actCounter]);
            actCounter++;
        }
    })
}

module.exports = setActors;