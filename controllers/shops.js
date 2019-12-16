let router = require('express').Router()

router.get('/', (req, res) => {
  res.send('ALL SHOPS ROUTE')
})

router.post('/', (req, res) => {
  res.send('MAKE NEW SHOP ROUTE')
})

router.get('/new', (req, res) => {
  res.send('NEW SHOP FORM ROUTE')
})

router.get('/:id', (req, res) => {
  res.send('SHOP DETAIL (show) ROUTE')
})

module.exports = router
