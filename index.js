const express = require('express');
const path = require('path');
const app = express();


app.get('/', (req,res) => {
    res.send('<h1>Express App.</h1>')
});

app.listen(3000, function(){
    console.log('server running!');
});
