const router = require('express').Router();
const { Episode, Director,  Tvshow, Actor} = require('../db');




router.get('/:id',async function(req,res){
    const {id} = req.params;
        try {
        const tvshow = await Episode.findByPk(id,{
            include:[                
                {model:Director},                
                {model:Tvshow, include:[{model:Actor}]},	
            ]
        });
        tvshow? res.json(tvshow) : res.status(404).send('Not found');
        }  catch (error){
        console.log(error)
    }
})


module.exports = router;