const myPost = require('../database/db.js')
const fs = require('fs')

const store = (req,res) =>{
    const newPost = {
        ...req.body
    }
    myPost.push(newPost)

    fs.writeFileSync('./database/db.js', `module.exports = ${JSON.stringify(myPost, null, 4)}`)

    res.json({
        Post : newPost
    })
}

const update = (req,res) => {

    const post = myPost.find(post => post.title.toLocaleLowerCase() === req.params.title)

    if(!post){
        return res.status(404).json({
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


const destroy = (req,res) =>{
    
    const post = myPost.filter(post => post.slug.toLowerCase() !== req.params.slug.toLowerCase())

    if (!post){
        return res.status(404).json({
            error : ' no corresponding post found'
        })
    }

    const newPost = myPost.filter(post => post.slug.toLowerCase() !== req.params.slug.toLowerCase())

    fs.writeFileSync('./database/db.js', `module.exports = ${JSON.stringify(myPost, null, 4)}`)

    res.json({
        status : 200,
        data : newPost
    })

}

module.exports = {
    store,
    update,
    destroy
}