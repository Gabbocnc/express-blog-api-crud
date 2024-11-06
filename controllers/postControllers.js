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

const update = (req,res) => {
    const post = myPost.find(post => post.title.toLocaleLowerCase() === req.params.title)

    if(!post){
        res.status(404).json({
            error : 'no post found with that title'
        })
    }
    post.title = req.body.title
    post.slug = req.body.slug
    post.content = req.body.content
    post.image = req.body.image
    post.tags = [req.body.tags]

    fs.writeFileSync('./database/db.js', `module.exports = ${JSON.stringify(myPost, null, 4)}`)

    res.status(200).json({
        status : 200,
        data : post
    })
}










module.exports = {
    store,
    update
}