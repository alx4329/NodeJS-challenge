const router = require('express').Router();
const { Movie, Actor, Director} = require('../db');




router.get('/',async function(req,res){
    const {name} = req.query;
    const {sortAZ} = req.query;
    try {
        let moviesToSend = []
        
        
        const movies = await Movie.findAll({include:[Actor, Director] });
        if (name){
            moviesToSend = movies.filter(movie => movie.name.toLowerCase().includes(name.toLowerCase()))
        } else {
            moviesToSend = movies
        }
        if(moviesToSend.length>0 ){
            if(sortAZ !==null && sortAZ==='A-Z'){
                moviesToSend.sort((prev, next) => {
                    if (prev.name > next.name) return 1
                    if (prev.name < next.name) return -1
                    return 0
                })
            } else {
                moviesToSend.sort((prev, next) => {
                    if (prev.name > next.name) return -1
                    if (prev.name < next.name) return 1
                    return 0
                })
            }
            res.send(moviesToSend)
        } else {
            res.send('movies not found')
        } 

    
    }   
        catch (error){
        console.log(error)
    }
})


module.exports = router;