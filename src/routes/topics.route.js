const { Router } = require('express');
const router = Router()
const { topicsDelete,topicsPost } = require('../controllers/topics.controller')
const { topicsPostEjs , topicsDeleteEjs } = require('../controllers/home.controller');
const isAuth = require('../middlewares/isAuth');

router.get('/admin/topicspost/ejs',isAuth,topicsPostEjs)
router.get('/admin/topicsdelete/ejs',isAuth,topicsDeleteEjs)
router.post('/admin/topics/post',isAuth,topicsPost)
router.post('/admin/topics/delete',isAuth,topicsDelete)

module.exports = router