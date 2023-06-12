const {Router} = require("express");
const {
  home,
  detailPage,
  listingPage,
  adminPage,
} = require("../controllers/home.controller");
const {subscribePost} = require('../controllers/subscribe.controller')
const isAuth = require("../middlewares/isAuth");

const router = Router();

router.get("/", home);
router.get("/detail-page", detailPage);
router.get("/listing-page", listingPage);
router.get("/admin", isAuth, adminPage);
router.post('/admin/subscribe/post',subscribePost)

module.exports = router;
