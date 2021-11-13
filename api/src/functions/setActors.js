const { Movie, Actor, Director, Tvshow} = require('../db');

async function setActors(){
    const movies = await Movie.findAll();
    const actors = await Actor.findAll();
    const tvShows = await Tvshow.findAll();

    let actCounter = 1;    
    movies.forEach(movie => {        
        for (let i=0; i<4; i++){            
            movie.addActor(actors[actCounter]);
            actCounter++;
            console.log('actorSet to movie', movie.id)
        }
    })
    let tvActCounter = 1;
    tvShows.forEach(tvShow => {
        for (let i=0; i<15; i++){
            tvShow.addActor(actors[tvActCounter]);
            tvActCounter++;
            console.log('actorSet to Tvshow', tvShow.id)
        }
    })
}

module.exports = setActors;