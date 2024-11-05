const myPost = require('../database/db.js')
const fs = require('fs')

const store = (req,res) =>{
    const newPost = {
        data: req.body.data
    }
    myPost.push(newPost)
    fs.writeFileSync('./database/db.js', `module.exports = ${JSON.stringify(myPost, null, 4)}`)

    res.json({
        data: req.body
    })
}

module.exports = {
    store
}