const bcrypt = require('bcrypt')
// const { Router } = require('express');
const { User} = require('../db');
const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.get('/login', async(req,res)=>{
    const { username, password} = req.body

    const user = await User.findOne({
        where: {
            username: username
        }
    })

    const passwordCorrect = user === null? 
    false 
    : await bcrypt.compare(password, user.Hashpassword)

    if(!(user && passwordCorrect)){
        res.status(401).send('Wrong username or password')
        return
    }  
    
    const userForToken = {
        username: user.username,
        id: user.id,
        token
    }
    
    const token = jwt.sign(userForToken, process.env.SECRET)
    
    res.send({
            name: user.name,
            username: user.username,
            token
        })
    
})

module.exports = router;