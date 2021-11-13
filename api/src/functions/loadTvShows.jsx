const { Tvshow, Actor, Director} = require('../db');
const tvshows = require('../../mockdata/tvshows')





async function loadTvShows(){
    try{
        let res=tvshows.map(async(m)=>{
        
            // directorId++
            
        
        const newTvshow = await Tvshow.create({
            name: m.name,
            description: m.description,
            language: m.languaje,
            country: m.Country,
            genre: m.genre,
            numberOfEpisodes: m.numberOfEpisodes,
            numberOfSeasons: m.numberOfSeasons
        })
        
        return console.log("TvShow added", newTvshow.id)
    
        })
        return res

    }catch(err){
        console.log(err)
    }
    
    
    

}

module.exports = loadTvShows