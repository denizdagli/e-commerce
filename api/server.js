const express = require('express');
const methodOverride = require('method-override');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'));
//TEMPLATE ENGINE
app.set('view engine', 'ejs');

// //MIDDLEWARES
// app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(methodOverride('_method', {
//   methods: ['POST', 'GET'],
// }));



app.listen(port, () => console.log(`Example app listening on port ${port}!`));