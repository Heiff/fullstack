const {v4: uuid} = require("uuid");
const Io = require("../utils/io");
const Teachers = new Io("./database/teacher.json");
const Teacher = require("../models/Teacher");
const Users = new Io('./database/register.json')


const create = async (req, res) => {
  const {name, field} = req.body;
  const {image} = req.files;
  console.log(image);
  const imageName = `${uuid()}.${
    image.name.split(".")[image.name.split(".").length - 1]
  }`;
  
  image.mv(process.cwd() + "/uploads/" + imageName);

  const newTeacher = new Teacher(name, imageName, field);

  const teachers = await Teachers.read();

  const data = teachers.length ? [...teachers, newTeacher] : [newTeacher];

  await Teachers.write(data);
  res.redirect('/admin/get/ejs')

};

const Delete = async(req,res) =>{
const { id } = req.body;
const data = await Teachers.read()
const DataFilter = data.filter(el => el.id != id)
await Teachers.write(DataFilter)
res.redirect('/admin/get/ejs')
}
const usersDelete = async(req,res) =>{
  const { id } = req.body;
  const data = await Users.read()
  const DataFilter = data.filter(el => el.id != id)
  await Users.write(DataFilter)
  res.redirect('/admin/get/ejs')
  }

const getUsers = async(req,res) => {
const data = await Users.read();
res.render('users',{
  data
})
}

module.exports = {
  create,
  Delete,
  getUsers,
  usersDelete
};
