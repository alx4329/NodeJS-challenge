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

router.post('/add', (req,res)=>{
    const {name, released_date, language, actors, directorId,country, genre,description} = req.body;
    const newMovie = {name, released_date, language, genre,description,country};
    
    
    if (
        !name || !released_date || !description || !country || !actors || !directorId || !language || !genre) {	

        res.status(400).send({
            msg: 'Todos los campos requeridos'
        })
    } else {
        try{
            Movie.create(newMovie)
            .then(movie => {
                if(actors){            
                    actors.forEach(actorId => {                
                        Actor.findByPk(actorId)
                        .then(actor => {                    
                            movie.addActor(actor)
                        })
                    })
                }
                if(directorId){            
                    
                        Director.findByPk(directorId)
                        .then(director => {
                            movie.setDirector(director)
                            res.send(movie)
                        })
                    
                }
            })

        } catch (error){
            console.log(error)
        }
        

    }
    
})


module.exports = router;