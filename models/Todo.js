/**
 * Created by maryna on 29/03/15.
 */

var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
    note: String,
    completed: Boolean,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Todo', TodoSchema);
