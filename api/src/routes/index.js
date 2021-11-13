const { Router } = require('express');
const cors = require('cors');
const movies = require('../routes/movies')
const login = require('./login')

const router = Router();

router.use(
    cors({
      origin: '*',
      credentials: true,
    })
  );


router.use('/movies',movies)
router.use('/login',login)


module.exports = router;
