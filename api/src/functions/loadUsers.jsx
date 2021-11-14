const { User} = require('../db');
const users = require('../../mockdata/users')
const bcrypt = require('bcrypt');

async function loadUsers(){
    users.forEach(async(a)=>{

    const hashPassword = await bcrypt.hash(a.password, 10);
    const newuser = await User.create({
        username: a.username,
        email: a.email,
        password: hashPassword,   
    })
    console.log("user added", newuser.username)
})
}

module.exports = loadUsers