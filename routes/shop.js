const path = require('path');
const rootDir = require('../util/path');

const express = require('express');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('shop.js', adminData.products)
  const products = adminData.products
  res.render('shop', { 
    products, 
    docTitle: 'Shop',
    path: '/', 
    hasProducts: products.length > 0,
    activeShop: true,
    productCss: true,
  })
});

module.exports = router;
