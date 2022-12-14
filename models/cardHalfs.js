const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true}};

/*
const AnimaisSchema = new Schema({
        nome: { type: String, required: true }
    },
    opts
);
*/



const CardHalfSchema = new Schema({
        text: { type: String, required: true },
        isFaceUp: {type: Boolean, required: true},
        cardField: {type: String, required: true},
    }
    , opts,
    
);

CardHalfSchema.virtual("url").get(function () {
    return `/cards/${this.text}`;
});

CardHalfSchema.virtual("url2").get(function () {
    return `/cards/${this.cardField}`;
});

//console.log(CardHalfSchema);

//Forçando que o nome da coleção seja utilizado em português (ao invés de inglês no plural)
module.exports = mongoose.model("cardHalf", CardHalfSchema, "cardHalf");

