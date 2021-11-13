const { Movie, Actor, Director} = require('../db');
const actors = require('../../mockdata/actors')

async function loadActors(){
    actors.forEach(async(a)=>{
    const newActor = await Actor.create({
        name: a.name,
        age: a.age,
        country: a.country,   
    })
    console.log("actor added", newActor.id)
})
}

module.exports = loadActors