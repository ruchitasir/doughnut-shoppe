let router = require('express').Router()

router.get('/', (req, res) => {
  res.render('shops/index')
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('MAKE NEW SHOP ROUTE')
})

router.get('/new', (req, res) => {
  res.render('shops/new')
})

router.get('/:id', (req, res) => {
  res.send('shops/show')
})

module.exports = router
