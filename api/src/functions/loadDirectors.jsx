const { Movie, Actor, Director} = require('../db');
const directors = require('../../mockdata/directors')

async function loadDirectors(){
let created=directors.map(async(a,i)=>{
    const newDirector = await Director.create({
        name: a.name,
        age: a.age,
        country: a.country,   
    })
    const movie = await Movie.findOne({
        where: {
            id:i+1        }
        })
        movie ? await movie.setDirector(newDirector) : console.log("movie not found")
        return console.log("director added", newDirector.id)
    })

    return Promise.all(created).then(console.log("all directors added"))


}

module.exports = loadDirectors