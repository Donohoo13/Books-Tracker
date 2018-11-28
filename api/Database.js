const db = require('monk')('mongodb://Librarian:Password1@ds153715.mlab.com:53715/books-tracker');

module.exports = db