const router = require('express').Router();
const {index, music, about, contact, admin, login, noentry} = require('../controllers/mainController')
const accessAdmin = require('../middlewares/accessAdmin')
router
    .get('/', index)
    .get('/about', about)
    .get('/contact', contact)
    .get('/music', music)
    .get('/admin', accessAdmin, admin)
    .get('/login', login)
    .get('/noentry', noentry)

module.exports = router;