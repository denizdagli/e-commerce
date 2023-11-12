const e = require("express");
const { get } = require("mongoose");

exports.getIndexPage = (req, res) => {
  res.render('index');
};
exports.getShopPage = (req, res) => {
  res.render('shop');
  };

exports.getAboutPage = (req, res) => {
    res.render('about');
  };

exports.getServicesPage = (req, res) => {
    res.render('services');
  };

exports.getBlogPage = (req, res) => {
    res.render('blog');
  }

exports.getCartPage = (req, res) => {
  res.render('cart');
};

exports.getCheckoutPage = (req, res) => {
  res.render('checkout');
};

exports.getContactPage = (req, res) => {
  res.render('contact');
};

exports.getThankyouPage = (req, res) => 
  res.render('thankyou');
