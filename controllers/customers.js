let router = require('express').Router()
let db = require('../models')

router.get('/', (req, res) => {
    res.render('customers/index')
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST')
})
  
  module.exports = router