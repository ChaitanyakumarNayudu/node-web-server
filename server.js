const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
})
app.get('/', (req, res) => {
       res.render('home.hbs', {
        pageTitle: 'Home Page',
        date: new Date().getFullYear(),
        message: 'Welcome to Home page'
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        date: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: "Unable to fulfill the request"
    })
});

app.listen(3000);