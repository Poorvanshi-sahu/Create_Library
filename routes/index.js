var express = require('express');
var router = express.Router();
var userModel = require('./users');
const ObjectsToCsv = require('objects-to-csv');
var fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
    userModel.find().then((all) => {
        // console.log(all)
        res.render('index', { all })
    })
});

router.post('/add', (req, res) => {
    if (req.body.book && req.body.author && req.body.pages && req.body.rating && req.body.price) {
        userModel.create({
            book: req.body.book,
            author: req.body.author,
            pages: req.body.pages,
            rating: req.body.rating,
            price: req.body.price,
        }).then((data) => {
            res.redirect('/')
        })
    } else {
        res.redirect('/')
    }
})

router.get('/delete/:id', (req, res) => {
    userModel.findOneAndDelete({ _id: req.params.id }).then((finded) => {
        res.redirect('/')
    })
})




router.get('/export', async(req, res) => {
    userModel.find().then((all) => {

        const csv = new ObjectsToCsv(all);

        csv.toDisk('./test.csv');

        csv.toString();

        return res.download('./test.csv')

    })
})

module.exports = router;