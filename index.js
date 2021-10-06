console.log('hello')
const express = require('express')
const app = express()

app.use(express.static('public'))




const myContacts = require('./data/contact') //json verfügbar


app.get('/contact', (req, res) => {
  res.render('pages/contact.ejs', { allMyContacts: myContacts })
})
//oder
// app.get('/', (req, res) => {
//     res.render('pages/contact.ejs', { allMyContacts: myContacts })
//   })
  





app.listen(1000, () => {
  console.log('listening at localhost 1000')
})
