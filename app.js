const express = require('express');
const methodOverride = require('method-override');
const ejs = require('ejs');
require('dotenv').config();
const pageRoute = require('./routes/pageRoutes');

const app = express();
const port = process.env.PORT || 3000;

//TEMPLATE ENGINE
app.set('view engine', 'ejs');
app.set('views', './views');
//MIDDLEWARES
app.use(express.json());



app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use(express.urlencoded({ extended: true }));

app.use("/",pageRoute);

// app.use(methodOverride('_method', {
//   methods: ['POST', 'GET'],
// }));



app.listen(port, () => console.log(`Server is listening on port ${port}!`));