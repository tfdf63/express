const express = require('express');
const usercontroller = require('../controllers/UserController');

const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send('12');
});

router.get('/alluser', usercontroller.getalluser);
router.post('/adduser', usercontroller.addnewuser);
router.post('/deleteuser', usercontroller.deleteuser);

module.exports = router;
