const Io = require("../utils/io");
const Epizod = new Io('./database/epizodes.json')
const Teachers = new Io("./database/teacher.json");
const Topics = new Io('./database/topics.json')
const Subscribe = new Io('./database/subscribe.json')
const jwt = require('../utils/jwt')

const home = async (req, res) => {
  const teachers = await Teachers.read();
  const epizod = await Epizod.read();
  const topics = await Topics.read()
  if (req.cookies.token) {
    const user = jwt.verify(req.cookies.token)
    const text = []
    if (user.length < 8) {
      text.push(user)
    }
    
    res.render("index", {
      teachers,
      text,
      epizod,
      topics
    });
  }
  else if(!req.cookies.token){
    const text = ['authorization']
    res.render("index", {
      teachers,
      text,

    });
  }
   
 
};

const detailPage = async (req, res) => {
  res.render("detail-page");
};

const listingPage = async (req, res) => {
  res.render("listing-page");
};

const adminPage = async (req, res) => {
  res.render("admin");
};

const teachersGet = async(req,res) => {
  const data = await Teachers.read()
  res.render('teachersget',{
    data
  })
}

const teachersPost = async(req,res) => {
  res.render('teacherspost')
}

const teachersDelete = async(req,res) => {
  const data = await Teachers.read()
  res.render('teachersdelete',{
  data
  })
}

const epizodPostEjs = async(req,res) => {
  res.render('epizodespost')
}

const epizodDeleteEjs = async(req,res) => {
  const data = await Epizod.read()
  res.render('epizodesdelete',{
    data
  })
}

const topicsPostEjs = async(req,res) =>{
res.render('topicspost')
}

const topicsDeleteEjs = async(req,res) =>{
const data = await Topics.read()
res.render('topicsdelete',{
  data
})
}

const subscribeDeleteEjs = async(req,res) => {
  const data = await Subscribe.read()
  res.render('subscribe',{
    data
  })
}


module.exports = {
  home,
  detailPage,
  adminPage,
  listingPage,
  teachersGet,
  teachersPost,
  teachersDelete,
  epizodPostEjs,
  epizodDeleteEjs,
  topicsDeleteEjs,
  topicsPostEjs,
  subscribeDeleteEjs
};
