//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const moviesLoader = require('./src/functions/loadMovies.jsx')
const actorsLoader = require('./src/functions/loadActors.jsx')
const directorsLoader = require('./src/functions/loadDirectors.jsx')
const setActors = require('./src/functions/setActors.js')
const loadTvShows = require('./src/functions/loadTvShows.jsx')
const loadEpisodes = require('./src/functions/loadEpisodes.jsx')
const setDirectors = require('./src/functions/setDirectors.js')
const loadUsers = require('./src/functions/loadUsers.jsx')



conn.sync({ force: true }).then(async() => {
  const u=await loadUsers()
  const m=await moviesLoader()
  const e = await loadEpisodes()
  const T=await loadTvShows()
  const l=await actorsLoader()
  //const d=await directorsLoader()
  
  directorsLoader().then(async(c)=>{
    
    const set = await setActors()
    const set2 = await setDirectors()
  })
  
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
