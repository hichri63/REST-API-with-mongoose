const express = require('express')
const router = express.Router()
const Contacts = require('../models/Contact')


router.get('/', (req, res)=>{
    Contacts.find()
           .then(cantacts=>res.json(cantacts))
           .catch(err =>console.error(err.message))

})


router.post('/', (req, res)=>{
    const {name, Num_tel, Email} = req.body
    let newContacts = new Contacts({
        name,
        Num_tel,
        Email
    })
    newContacts.save()
              .then(()=> res.send('New Cantacts created'))
              .catch(err =>console.error(err.message))
})
router.delete('/:id', (req, res)=>{
        Contacts.findByIdAndDelete(req.params.id)
               .then(()=> res.send("Contacts delete"))
               .catch(err =>console.error(err.message))
})
router.put('/:id',(req, res)=>{
    Contacts.findByIdAndUpdate(req.params.id, req.body)
           .then((contacts=> res.json(contacts)))
           .catch(err=> console.error(err.message))
          
})

module.exports = router