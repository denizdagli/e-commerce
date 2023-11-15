const e = require("express");
const nodemailer = require('nodemailer');
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

exports.sendMail = (req, res) => {
  const email_address = process.env.NODE_MAIL;
const email_password = process.env.NODE_PASS;
const htmlTemplate = `
  <!DOCTYPE html>
  <html lang="tr">
  <head>
    <meta charset="UTF-8">
    <title>İletişim Formu</title>
    <style>
      /* CSS stilleri burada olabilir */
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        background-color: #f4f4f4;
        margin: 0;
        padding: 20px;
      }
      .container {
        max-width: 800px;
        margin: auto;
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      h1 {
        text-align: center;
      }
      .contact-info {
        border-top: 1px solid #ccc;
        padding-top: 20px;
        margin-top: 20px;
      }
      .contact-info p {
        margin: 10px 0;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>İletişim Formu</h1>
      <div class="contact-info">
        <p><strong>Adı:</strong> ${req.body.name}</p>
        <p><strong>Soyadı:</strong> ${req.body.surname}</p>
        <p><strong>E-posta:</strong> ${req.body.email}</p>
        <p><strong>Mesaj:</strong> ${req.body.message}</p>
      </div>
    </div>
  </body>
  </html>
  `;
  
  
    // E-posta göndermek için SMTP transporter'ınızı yapılandırın
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: email_address, // Kendi e-posta adresinizi buraya girin
    pass: email_password // E-posta hesabınızın şifresini buraya girin
  }
});


// Gönderilecek e-posta ayarlarını yapın
let mailOptions = {
  from: `${req.body.email}` ,// Gönderen e-posta adresi
  to: 'denizdaglice@gmail.com', // Alıcı e-posta adresi
  text: 'E-posta içeriği' ,// E-posta içeriği (metin formatında)
   html: htmlTemplate // HTML içeriği eklemek isterseniz
};

// E-posta gönderme işlemi
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    res.status(500).send('E-posta gönderirken bir hata oluştu: ' + error);
  } else {
   
    res.status(200).render('contact');
  }
});
};

exports.getThankyouPage = (req, res) => 
  res.render('thankyou');

exports.getLoginPage = (req, res) => {
  res.render('login');
}
