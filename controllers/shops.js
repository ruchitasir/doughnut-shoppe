let router = require('express').Router()
let db = require('../models')

router.get('/', (req, res) => {
  res.render('shops/index')
})

router.post('/', (req, res) => {
  db.shop.create(req.body)
  .then(newShop => {
    res.redirect('/shops')
  })
  .catch(err => {
    console.log('Error', err)
    res.send('Error')
  })
})

router.get('/new', (req, res) => {
  res.render('shops/new')
})

router.get('/:id', (req, res) => {
  res.send('shops/show')
})

module.exports = router
