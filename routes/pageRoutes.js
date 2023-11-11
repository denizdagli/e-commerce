const router = require('express').Router();
const pageControllers = require('../controllers/pageControllers');


router.get("/about", pageControllers.getAboutPage);
router.get("/index", pageControllers.getIndexPage);
router.get("/cart", pageControllers.getAboutPage);
router.get("/shop", pageControllers.getIndexPage);
module.exports = router;  