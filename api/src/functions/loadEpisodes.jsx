const { Tvshow, Actor, Director,Episode} = require('../db');
const episodes = require('../../mockdata/episodes')





async function loadEpisodes(){
    try{
        let res=episodes.map(async(m)=>{
        
            // directorId++
            
        
        const newEpisode = await Episode.create({
            TVshow: m.TVshow,
            description: m.description,
            fromSeason: m.fromSeason,
            episodeNumber: m.episodeNumber
        
        })
        
        return console.log("Episode added", newEpisode.id)
    
        })
        return res

    }catch(err){
        console.log(err)
    }
    
    
    

}

module.exports = loadEpisodes