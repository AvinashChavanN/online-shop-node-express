
const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }

  exports.postAddProducts = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
  }

  exports.getProducts = (req, res, next) => {
    Product.fetchAll(cb=>{
        res.render('shop', {
            prods: cb,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: cb.length > 0,
            activeShop: true,
            productCSS: true
          });
    });

  }