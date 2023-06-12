const jwt = require("../utils/jwt");
const Io = require('../utils/io')
const Data = new Io('./database/users.json')
const isAuth = async(req, res, next) => {
  const data = await Data.read()
  try {
    const token = req.cookies.token;
    let yes = true
    const verify = jwt.verify(token);
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == verify.userId) {
        yes = false
        next();
      }
      
    }
    if(yes) {
      res.redirect('/login')
    }
   
  } catch (error) {
    res.redirect("/login");
  }
};

module.exports = isAuth;
