const BlogPost = require('../models/BlogModel');
// import BlogPost from '../models/BlogModel';
const schema = require('../middlewares/BlogValidation');
const commentSchema = require('../middlewares/CommentValidation');
// import schema from '../middlewares/BlogValidation';

class BlogController {

    static post = async (req, res)=>{
        //Let's validate the inputs.
        const {error} = schema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);   

        const blog = new BlogPost({
            title: req.body.Title,
            body: req.body.Body,
            imgLink: req.body.ImageLink
        });

        try{
            await blog.save();
            res.send(blog);
        } catch(err){
            res.status(400).send(err);
        }

    }

    static updatePostById = async (req, res) => {

        //Let's validate the inputs.
        const {error} = schema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);   

        const blog = new BlogPost({
            title: req.body.Title,
            body: req.body.Body,
            imgLink: req.body.ImageLink
        });

        try{
            const blog = await BlogPost.findOne({_id: req.params.id});
            if(req.body.Title){
                blog.title = req.body.Title;
            }
            if(req.body.Body){
                blog.body = req.body.Body;
            }
            if(req.body.ImageLink){
                blog.imgLink = req.body.ImageLink;
            }
            await blog.save();
            res.send(blog);
        } catch(err) {
            res.status(400).send({err: "Post Doesn\'t Exist"});
        }
    }

    static getPosts = async (req, res) => {
        
        try{
            const blog = await BlogPost.find();
            res.send(blog);
        } catch(err){
            res.status(404).send(err);
        }

    }

    static getPostsById = async (req, res) => {

        try{
            const blog = await BlogPost.findOne({_id: req.params.id});
            res.send(blog);
        } catch(err){
            res.status(404).send({err: 'Post Does Not Exist'});
        }
    }

    static deletePostById = async (req, res) => {
        try{
            await BlogPost.deleteOne({_id: req.params.id});
            res.status(204).send();
        } catch(err){
            res.status(400).send({err: 'Post Does Not Exist'});
        }
    }

    static commentPost = async (req, res) => {

        //Let's validate the inputs.
        const {error} = commentSchema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);   

        try{
            
            const blog = await BlogPost.findOne({_id: req.params.id});
            
            if(req.body.Comment){
                blog.comment.push({ 
                    comment :req.body.Comment,
                    date : new Date(),
                    username : req.user.username

                });
            }
            await blog.save();
            res.send(blog);
        } catch(err) {
            res.status(400).send({err: "Post Doesn\'t Exist"});
        }

    }

    static likePost = async (req, res) => {
          
        try{
            const blog = await BlogPost.findOne({_id: req.params.id});

            if(blog.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
                return res.status(400).json({
                    msg: 'Post Already Liked'
                });
            }

            blog.likes.unshift({user : req.user.id});

            await blog.save();

            res.json(blog.likes);

            // if(req.body.Comment){
            //     blog.comment.push({ 
            //         comment :req.body.Comment,
            //         date : new Date(),

            //     });
            // }
            // await blog.save();
            // res.send(blog);
        } catch(err) {
            res.status(400).send({err: "Post Doesn\'t Exist"});
        }
    }

}

module.exports = BlogController;