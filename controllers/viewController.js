const contactModel = require('../models/contactModel')

const getIndexView = (req, res) => {
    res.render('index')
}

const getContactView = (req, res) => {
    res.render('pages/contact')
}

const getContactListView = (req, res) => {
    contactModel.getContacts((err, result) => {
        if (err) {
            console.error('데이터 조회 중 에러 발생', err);
            return res.status(500).send('내부 서버 오류');
        }
        res.render('pages/contactList', { lists: result });
    });
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
    getIndexView,
    getContactView,
    getContactListView,
}