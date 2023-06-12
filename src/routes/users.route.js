const {Router} = require("express");
const isAuth = require("../middlewares/isAuth");
const { getUsers, usersDelete } = require('../controllers/teacher.controller')
const { subscribeDeleteEjs } = require('../controllers/home.controller')
const { subscribeDelete } = require('../controllers/subscribe.controller')

const router = Router();

router.post('/admin/subscribe/delete',isAuth,subscribeDelete)
router.get('/admin/subscribe/ejs',subscribeDeleteEjs)
router.get("/admin/users/ejs", isAuth, getUsers);
router.post('/admin/users/delete',isAuth,usersDelete)

module.exports = router;
