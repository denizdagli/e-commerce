const router = require('express').Router();
const pageControllers = require('../controllers/pageControllers');

router.get("/index", pageControllers.getIndexPage);
router.get("/shop", pageControllers.getShopPage);
router.get("/about", pageControllers.getAboutPage);
router.get("/services", pageControllers.getServicesPage);
router.get("/blog", pageControllers.getBlogPage);
router.get("/cart", pageControllers.getCartPage);

module.exports = router;  