const { Router } = require('express');
const router = Router()
const {epizodesPost, epizodesDelete} = require('../controllers/epizod.controller')
const {epizodPostEjs, epizodDeleteEjs} = require('../controllers/home.controller');
const isAuth = require('../middlewares/isAuth');

router.get('/admin/epizodpost/ejs',isAuth,epizodPostEjs)
router.get('/admin/epizoddelete/ejs',isAuth,epizodDeleteEjs)
router.post('/admin/epizod/post',isAuth,epizodesPost)
router.post('/admin/epizod/delete',isAuth,epizodesDelete)

module.exports = router