var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var GoodSchema = new Schema({
    username : String,
    goodname : String,
    imgUrl   : String,
    price    : String,
    originalPrice    : String,
    flag     : { type: Number, default: 1 },
    date     : { type: Date, default: Date.now }
});

var GoodModel = mongoose.model('good', GoodSchema);

module.exports = GoodModel;