let router = require('express').Router()
let db = require('../models')

router.get('/', (req, res) => {
    res.render('customers/index')
})

router.post('/', (req, res) => {
    db.customer.create(req.body)
    .then(newCustomer=>{
        res.redirect('/customers/'+newCustomer.id)
    })
    .catch(err=>{
        console.log('err',err)
        res.send('error')
    })
   
})

router.get('/:id',(req,res)=>{
    db.customer.findOne({
        where: {id: req.params.id},
        include: [ db.donut ]
    })
    .then(customer=>{
        db.donut.findAll()
        .then(allDonuts=>{
            res.render('customers/show',{customer,allDonuts})
        }) 
        .catch(err=>{
            console.log('err',err)
            res.send('error')
        })
        
    })
    .catch(err=>{
        console.log('err',err)
        res.send('error')
    }) 
})


// add fave donut to a customer
router.get('/:customerId/donuts/:donutId',(req,res)=>{
        db.customer.findOne({
            where: {id: req.params.customerId}
        })
        .then(customer=>{
            customer.addDonut(req.params.donutId)
            .then(()=>{
                res.redirect('/customers/'+req.params.customerId)
            })
        })
        .catch(err=>{
            console.log('err',err)
            res.send('error')
        }) 
})

    /* // this route adds favorite donuts to a customer
router.get('/:customerId/donuts/:donutId', (req, res) => {
    // You can do THIS
    db.customer.findOne({
        where: { id: req.params.customerId }
    })
    .then(customer => {
        // <model1>.add<model2>(model2 instance OR id)
        customer.addDonut(req.params.donutId)
        .then(() => {
            res.redirect('/customers/' + req.params.customerId)
        })
        .catch(err => {
            console.log(err)
            res.send('error')
        })
    })
    .catch(err => {
        console.log(err)
        res.send('error')
    })

    // OR the equivalent (manual, no helper functions)
    // db.customers_donuts.create({
    //     customerId: req.params.customerId,
    //     donutId: req.params.donutId
    // })
    // .then(() => {
    //     res.redirect('/customers/' + req.params.customerId)
    // })
    // .catch(err => {
    //     console.log(err)
    //     res.send('error')
    // })
}) */



  
  module.exports = router