let router = require('express').Router()
let db = require('../models')

router.get('/', (req, res) => {
  db.donut.findAll()
  .then(donuts => {
    res.render('donuts/index', { donuts })
  })
  .catch(err => {
    console.log(err)
    res.send('error happened')
  })
})

router.post('/', (req, res) => {
  db.donut.create(req.body)
  .then(donut => {
    res.redirect('/shops/' + req.body.shopId)
  })
  .catch(err => {
    console.log(err)
    res.send('error happened')
  })
})

router.get('/:id', (req, res) => {
  db.donut.findOne({
    where: { id: req.params.id },
    include: [ db.shop, db.customer ]
  })
  .then(donut => {
    res.render('donuts/show', { donut })
  })
  .catch(err => {
    console.log(err)
    res.send('Something bad happened?')
  })
})

module.exports = router
