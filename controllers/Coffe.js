const Coffe = require('../models/Coffe')

module.exports = {
    createData : (req,res) => {
        Coffe.create({
            nama : req.body.nama,
            bean : req.body.bean,
            method : req.body.method,
            price : req.body.price
        })
        .then((result) => res.json(result))
        .catch(err => {
            throw err
        })
    },
    getData :(req,res) => {
        Coffe.findAll()
        .then((result) => res.json(result))
        .catch(err => {
            throw err
        })
    }
}