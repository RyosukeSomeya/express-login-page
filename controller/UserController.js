const views = '../views/'

module.exports = {
  showHome: (req, res, next) => {
    console.log('user')
    const data = {

    }
    res.render(views + 'home.ejs', data);
  },
}
