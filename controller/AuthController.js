const express = require('express');
const views = '../views/'

module.exports = {
  login: (req, res, next) => {
    console.log('access')
    res.render(views + 'index.ejs');
  },
  registUser: (req, res, next) => {
    console.log('access')
    res.render(views + 'regist.ejs');
  }
}
