const { Movie, Actor, Director,Episode} = require('../db');
const directors = require('../../mockdata/directors')

async function loadDirectors(){
const episodes = await Episode.findAll();
console.log(episodes.length)
let epCounter = 0;


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
        console.log("director added", newDirector.id)

    })

    return Promise.all(created).then(console.log("all directors added"))


}

module.exports = loadDirectors