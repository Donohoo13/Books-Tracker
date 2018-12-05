const { send, json } = require('micro')
const { router, get, put, del, post } = require('microrouter')
const cors = require('micro-cors')()
const db = require('./Database')

const Books = db.get('Books')

getBooks = async (req, res) => {
    let result = await Books.find({}).then(results => results)
    send(res, 200, result)
}

getBooksByName = async (req, res) => {
    let result = await Books.find({}).then(results => results)
    result = result.filter(book => book.title.toLowerCase().replace(/\s/g, "")
    .includes(req.params.title.toLowerCase()))
    // console.log(result)
    send(res, 200, result)
}

getBooksById = async (req, res) => { 
    result = await Books.find({_id: req.params.id}).then(results => results)
    console.log(result)
    send(res, 200, result)
}

getBooksByStatus = async (req, res) => {
    let result = await Books.find({}).then(results => results)
    result = result.filter(book => book.status === req.params.status)
    console.log("post-filter", result)
    send(res, 200, result)
}

addBook = async (req, res) => {
    const body = await json(req)
    console.log(body)
    const result = await Books.insert( body ).then(results => results)
    console.log(result)
    send(res, 200, result)
}

deleteBook = async (req, res) => {
    const result = await Books.remove({_id: req.params.id}).then(results => results)
    send(res, 200, result)
}

updateBook = async (req, res) => {
    const body = await json(req)
    const result = await Books.update({_id: req.params.id}, body).then(results => results)
    send(res, 200, result)
}

module.exports = cors(
    router(
    get('/books', getBooks),
    get('/books/title/:title', getBooksByName),
    get('/books/id/:id', getBooksById),
    get('/books/status/:status', getBooksByStatus),
    post('/books', addBook),
    del('/books/id/:id', deleteBook),
    put('/books/id/:id', updateBook)
))