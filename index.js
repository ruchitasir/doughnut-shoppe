let express = require('express')
let layouts = require('express-ejs-layouts')

let app = express()
let db = require('./models')

app.set('view engine', 'ejs')
app.use(layouts)
app.use(express.urlencoded({ extended: false }))

app.use('/shops', require('./controllers/shops'))

app.post('/donuts', (req, res) => {
  db.donut.create(req.body)
  .then(donut => {
    res.redirect('/shops/' + req.body.shopId)
  })
  .catch(err => {
    console.log(err)
    res.send('error happened')
  })
})

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(process.env.PORT || 3000)
