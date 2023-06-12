const Io = require('../utils/io')
const Data = new Io('./database/register.json')
const jwt = require('../utils/jwt')
const Register = require('../models/Register')

const usersRegister = async(req,res) => {
    const data = await Data.read()
    const { user,pass } = req.body;
    for (let i = 0; i < data.length; i++) {
       if (data[i].user == user) {
        res.redirect('/user/reg')
       }
    }
    const token = jwt.sign(pass)
    const newData = new Register(
        user,
        token
    )
    const users = data ? [...data, newData] : [newData];
    await Data.write(users)
    res.redirect('/user/login')
}


const usersLogin = async(req,res) => {
    const {user,pass} = req.body
    const data = await Data.read()
    let yes = false;
    const UserFilter = data.filter(el => {
        const newpass = jwt.verify(el.pass)
        if (el.user == user && newpass == pass) {
            yes = true
            return el
        }
    }) 
    console.log(UserFilter);
    const token = jwt.sign(user)
    if (yes) {
        res.cookie('token',token)
        res.redirect('/')
    }
    else {
        res.redirect('/user/login')
    }
}


module.exports = {
    usersRegister,
    usersLogin
}