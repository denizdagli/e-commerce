const router = require('express').Router();
const pageControllers = require('../controllers/pageControllers');

router.get("/index", pageControllers.getIndexPage);
router.get("/shop", pageControllers.getShopPage);
router.get("/about", pageControllers.getAboutPage);
router.get("/services", pageControllers.getServicesPage);
router.get("/blog", pageControllers.getBlogPage);
router.get("/cart", pageControllers.getCartPage);
router.get("/checkout", pageControllers.getCheckoutPage);
router.get("/contact", pageControllers.getContactPage);
router.get("/thankyou", pageControllers.getThankyouPage);
module.exports = router;  