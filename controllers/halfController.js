const ObjectId = require('mongoose').Types.ObjectId;
const cardHalfs = require('../models/cardHalfs');

exports.list = async (req, res) => {
    await cardHalfs.find({}).exec(function(err, docs) {
        res.status(200).json(docs);   
    });
}

exports.show = (req, res) => {
    res.send(`NÃO IMPLEMENTADO: ${req.params.id}`);
}

exports.create = (req, res) => {

    const cardHDocument = new cardHalfs({
        text: req.body.text,
        isFaceUp: req.body.isFaceUp,
        cardField: req.body.cardField
    });
    cardHDocument
        .save()
        .then(result => {
            res.status(201).json({ msg: 'cardH cadastrado com sucesso'});
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

exports.update = async (req, res) => {
    const filter = { _id: new ObjectId(req.body.id) };
    
    const update = {
        text: req.body.text,
        isFaceUp: req.body.isFaceUp,
        cardField: req.body.cardField
    };

    console.log(filter);
    console.log(update);
    await cardHalfs.findOneAndUpdate(filter, update).then(function (err, result) {
        console.log(req.body.text);
        msg = "card atualizado com sucesso!";
        // res => response => resposta 
        res.msg = msg;
        exports.list(req, res);
    });
}

exports.delete = async (req, res) => {

    var msg;
    await cardHalfs.findOneAndDelete({text: req.body.text}).then(function (err, data) {
        msg = "card excluído com sucesso!";
        res.msg = msg;
        exports.list(req, res);
        
    });

    
}