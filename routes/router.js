const express = require('express')
const router = express.Router();
const apiController = require('../controllers/apiController') 
const viewController = require('../controllers/viewController')

/* route to view controllers */
// return Main view
router.get('/', viewController.getIndexView);
router.get('/contact', viewController.getContactView);

/* route to api controllers */
// contact Data Read
router.get('/api/contact/', apiController.getContacts);

// contact Data Create
router.post('/api/contact/', apiController.addContact);

// contact Data Update
router.put('/api/contact/:id', apiController.updateContact);

// contact Data Delete
router.delete('/api/contact/:id', apiController.deleteContact);

module.exports = router;