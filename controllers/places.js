const router = require('express').Router()
const express = require("express");

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/edgar-castrejon-J04BD4ysoh8-unsplash.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/remi-remino-E9kVmtiqqGE-unsplash.jpg'
      }]
      
      res.render('places/index', { places })

  })
  router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
  router.get('/:arrayIndex', (req, res) => {
    res.send(places[req.params.arrayIndex])
  })
  
  
  
module.exports = router
