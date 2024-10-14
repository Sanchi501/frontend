const {Schema, model} = require('../connection');

const mySchema = new Schema ({
    Item: { type: String, required: true},
    Price: {type: String, unique: true},
    password: String,
    createdAt: {type: Date, default: Date.now}
});

module.exports = model('users', mySchema);