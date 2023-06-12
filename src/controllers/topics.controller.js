const Io = require('../utils/io');
const Topics = new Io('./database/topics.json')
const Model = require('../models/Topics')
const {v4:uuid} = require('uuid')

const topicsPost = async(req,res) => {
    const data = await Topics.read()
    const {name} = req.body;
    const { image } = req.files;
    const id = (data[data.length - 1]?.id || 0) + 1;
    const imageName = `${uuid()}.${
        image.name.split(".")[image.name.split(".").length - 1]
      }`;
      image.mv(process.cwd() + `/uploads/${imageName}`);
      const newData = new Model(
        id,
        imageName,
        name
      )
      const newTopics = data.length ? [...data,newData] : [newData]

      await Topics.write(newTopics)
      res.redirect('/admin/get/ejs')
}

const topicsDelete = async(req,res) => {
    const { id } = req.body;
    const data = await Topics.read()
    const DataFilter = data.filter(el => el.id != id)
    await Topics.write(DataFilter)
    res.redirect('/admin/get/ejs')
}

module.exports = {
topicsPost,
topicsDelete

}