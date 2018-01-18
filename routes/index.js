var express = require('express');
var router = express.Router();

var AV = require('leancloud-storage');
var cfg = require('../config/config.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    var q = new AV.Query('Assets')
    q.addDescending('createdAt');
    q.equalTo('application', cfg.application.name);
    q.include('file')
    if (process.env == 'production') {
        q.equalTo('stage', 'production')
        return q.first().then((asset) => {
            res.render('index', {
                title: 'Express',
                asset: asset
            });
        })
    } else {
        q.equalTo('stage', 'development')
        return q.first().then((asset) => {
            console.log(asset.get('file').url())
            res.render('index', {
                title: 'Express',
                asset: asset
            });
        })
    }

});

module.exports = router;