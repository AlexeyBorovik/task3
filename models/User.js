const {Schema, model} = require('mongoose');

const schema = new Schema ({
    name: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    dateReg: {type: String},
    dateVisit: {type: String},
    status: {type: String},
    isBlocked: {type: Boolean},
    isAuth: {type: Boolean}
})

module.exports = model('User', schema);
