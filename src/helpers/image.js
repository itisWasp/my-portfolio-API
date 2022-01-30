const cloudinary = require('../config/cloudinary');


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

module.exports = imagePost;