const { Router } = require('express');
const cors = require('cors');
const movies = require('../routes/movies')
const login = require('./login')
const tvshow = require('./tvshow')

const router = Router();

router.use(
    cors({
      origin: '*',
      credentials: true,
    })
  );


router.use('/movies',movies)
router.use('/login',login)
router.use('/tvshow',tvshow)


module.exports = router;
