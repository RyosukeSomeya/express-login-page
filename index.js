const express = require('express');
const app = express();

app.use(express.static('public'));
app.set("view engine", "ejs");

app.get('/', (req,res) => {
    const data = {
        isRegister: false,
        pageTitle: 'Log in',
        btnText: "Log in"
    };
    res.render("login.ejs", data);
});

app.get('/register', (req,res) => {
    const data = {
        isRegister: true,
        pageTitle: 'Register',
        btnText: 'Register'
    };
    res.render("login.ejs", data);
});

app.listen(3000);
