let router = require('express').Router()
let db = require('../models')

router.get('/', (req, res) => {
    res.render('customers/index')
  })
  
  module.exports = router