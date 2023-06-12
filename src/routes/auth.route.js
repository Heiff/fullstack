const {Router} = require("express");
const {login, loginGet, userLogin, userReg} = require("../controllers/auth.controller");
const {usersRegister,usersLogin } = require('../controllers/regANDlog')

const router = Router();

router.post("/auth/login", login);
router.post('/auth/user/log',usersLogin)
router.post('/auth/user/reg',usersRegister)
router.get('/user/login',userLogin)
router.get('/user/reg',userReg)
router.get("/login", loginGet);

module.exports = router;
