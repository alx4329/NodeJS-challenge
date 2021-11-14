const bcrypt = require('bcrypt')
// const { Router } = require('express');
const { User} = require('../db');
const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.get('/', async(req,res)=>{
    const { username, password} = req.body

    const user = await User.findOne({
        where: {
            username: username
        }
    })
    const passwordCorrect = user === null? 
    false 
    : await bcrypt.compare(password, user.password)
    
    if(!(user && passwordCorrect)){
        res.status(401).send('Wrong username or password')
        return
    }  
    
        
    const userForToken = {
        username: user.username,
        id: user.id,
    }
    
    const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: 300 })
    const refreshToken = jwt.sign(userForToken, process.env.REFRESH_SECRET, { expiresIn: 86400 })
    
    const update = await User.update({
        refreshToken: refreshToken
    },{
    where:{
        id: user.id
    }})


    res.send({
            name: user.name,
            username: user.username,
            token,
            refreshToken
        })   
})

router.get('/RefreshToken', async (req,res)=>{
    const refreshToken = req.header('Authorization')
    //const {userId} = req.body
    if(!refreshToken){
        res.status(401).send('No refresh token')
        return
    }

    
    try{
    let obj = jwt.verify(refreshToken, process.env.REFRESH_SECRET)
    const user = await User.findOne({
        where:{
            username: obj.username
        }
    })
    if(!user || user.refreshToken !== refreshToken){
        res.status(401).send('User and refresh dont match')
        return
    }
    console.log(obj)
    userForToken = {
        username: user.username,
        id: user.id,
    }
    const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: 120 })
    console.log(token)
    
    res.json(token)
    }catch(e){
        console.log(e)
    }
    
})


module.exports = router;