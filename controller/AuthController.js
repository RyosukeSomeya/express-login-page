const express = require('express');
const views = '../views/'

module.exports = {
  login: (req, res, next) => {
    const data = {
      isRegister: false,
      pageTitle: 'Log in',
      btnText: "Log in"
    };
    res.render(views + 'index.ejs', data);
  },
  registUser: (req, res, next) => {
    const data = {
      isRegister: true,
      pageTitle: 'Register',
      btnText: 'Register'
  };
    res.render(views + 'regist.ejs', data);
  }
}
