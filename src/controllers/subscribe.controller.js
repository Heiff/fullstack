const Io = require('../utils/io')
const Data = new Io('./database/subscribe.json')
const Model = require('../models/Subscribe')

const subscribePost = async(req,res) => {
    const data = await Data.read();
    const { email } = req.body;
    const id = (data[data.length - 1]?.id || 0) + 1;
    const newData = new Model(
        id,
        email
    )
    console.log(newData);
    const newSubscribe = data.length ? [...data,newData] : [newData]
    await Data.write(newSubscribe)
    res.redirect('/')
}

const subscribeDelete = async(req,res) => {
    const { id } = req.body;
    const data = await Data.read()
    const DataFilter = data.filter(el => el.id != id)
    await Data.write(DataFilter)
    res.redirect('/admin/get/ejs')
}

module.exports = {
    subscribeDelete,
    subscribePost
}