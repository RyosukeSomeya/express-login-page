const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));
// テンプレートエンジンの指定
app.set("view engine", "ejs");

app.get('/', (req,res) => {
    const data = {
        items: [
            {name: "<h1>リンゴ</h1>"},
            {name: "<h2>バナナ</h2>"},
            {name: "<h3>スイカ</h3>"}
        ]
    };
    // レンダリングを行う
    res.render("index.ejs", data);
});

app.listen(3000);
