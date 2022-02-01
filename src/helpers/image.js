// const cloudinary = require('../config/cloudinary');
import cloudinary from '../config/cloudinary.js';


let imagePost = async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr);
        console.log(uploadResponse);
        res.send(uploadResponse);
    } catch (err) {
        res.status(500).send({err : 'Something went wrong'});
    }
}

export default imagePost;