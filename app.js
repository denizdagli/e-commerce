const express = require('express');
const methodOverride = require('method-override');
const ejs = require('ejs');
require('dotenv').config();
const pageRoute = require('./routes/pageRoutes');
const carpet = require('./controllers/routes.js').carpet;
const transferData = require('./controllers/routes.js').transferData;
const app = express();


//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/",pageRoute);


app.use("/api",carpet)
app.use("/api",transferData)

// app.use(methodOverride('_method', {
//   methods: ['POST', 'GET'],
// }));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));