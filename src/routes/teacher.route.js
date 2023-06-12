const {Router} = require("express");
const isAuth = require("../middlewares/isAuth");
const {create, Delete} = require("../controllers/teacher.controller");
const { teachersGet, teachersPost, teachersDelete } = require("../controllers/home.controller");

const router = Router();

router.get("/admin/post/ejs", isAuth, teachersPost);
router.get('/admin/get/ejs',isAuth,teachersGet);
router.get('/admin/delete/ejs',isAuth,teachersDelete)
router.post('/admin/delete',isAuth,Delete)
router.post('/admin/post',isAuth,create)
module.exports = router;
