const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080
app.use('/assets', express.static('src/assets'));
app.set('view engine', 'ejs');
// viewed at http://localhost:8080
app.get('/', function (req, res) {
    res.render('index');
});

app.get('/about', function (req, res) {
    res.render('about');
});
app.get('/resources', function (req, res) {
    res.render('resources');
});

app.listen(port, () => console.log(`listening on port ${port}!`));