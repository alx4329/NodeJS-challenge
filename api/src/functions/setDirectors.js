const { Movie, Actor, Director, Episode, Tvshow} = require('../db');

async function setDirectors(){
    const episodes = await Episode.findAll();
    const directors = await Director.findAll();
    const Tvshows  = await Tvshow.findAll();
   
    let dicCounter = 0;    

    episodes.forEach(episode => {        
                 
            episode.setDirector(directors[dicCounter]);
            dicCounter<14 ? dicCounter++ : dicCounter = 0;
            console.log('dicSet to Episode', episode.id)
            episode.TVshow === 'Killing Joe' ? episode.setTvshow(Tvshows[0]) : episode.setTvshow(Tvshows[1]);
        
    })
    
}

module.exports = setDirectors;