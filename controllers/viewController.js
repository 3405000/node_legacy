const getIndexView = (req, res) => {
    res.render('index')
}

// app.get('/visit', (req, res) => {
//     res.render('pages/visit');
//   })
  
//   app.get('/blog', (req, res) => {
//       res.render('pages/blog');
//   })
  
  
  
//   app.get('/users', (req, res) => {
//       res.render('pages/users');
//   });
  
//   app.get('/contact', (req, res) => {
//       res.render('pages/contact');
//   })

module.exports = {
    getIndexView
}