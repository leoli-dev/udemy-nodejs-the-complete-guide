const path = require('path');
const rootDir = require('../util/path');

const express = require('express');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('shop.js', adminData.products)
  const products = adminData.products
  res.render('shop', { products, path: '/'})
});

module.exports = router;
