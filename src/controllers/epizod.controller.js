const Io = require('../utils/io')
const Data = new Io('./database/epizodes.json')
const Model = require('../models/Epizodes')
const {v4:uuid } = require('uuid')


const epizodesPost = async(req,res) => {
    const data = await Data.read()
    const { name,author,desc } = req.body;
    const { image,authorimage} = req.files
    const id = (data[data.length - 1]?.id || 0) + 1;
    const imageAuthor = `${uuid()}.${
        authorimage.name.split(".")[authorimage.name.split(".").length - 1]
      }`;
      authorimage.mv(process.cwd() + `/uploads/${imageAuthor}`);
    const imageName = `${uuid()}.${
      image.name.split(".")[image.name.split(".").length - 1]
    }`;
    image.mv(process.cwd() + `/uploads/${imageName}`);
    const DataFilter = data.filter(el => el.name == name)

    if (!DataFilter || DataFilter.length == 0) {
        const newEpizod = new Model(
            id,imageName,name,imageAuthor,author,desc
        )
        console.log(newEpizod);
        const newData = data.length ? [...data, newEpizod] : [newEpizod];
        await Data.write(newData)
        res.redirect('/admin/get/ejs')
    }
    else{
        res.redirect('/admin/epizodpost/ejs')
    }
}
const epizodesDelete = async(req,res) => {
    const { id } = req.body;
    const data = await Data.read()
    const DataFilter = data.filter(el => el.id != id)
    await Data.write(DataFilter)
    res.redirect('/admin/get/ejs')
}




module.exports = {
    epizodesDelete,
    epizodesPost 
}