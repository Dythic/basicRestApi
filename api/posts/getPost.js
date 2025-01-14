import Post from '../../models/Post.js';

const getPost = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (!post) {
            return res.status(404).send('Post non trouvé');
        }
        res.send(post);
    } catch (err) {
        res.status(500).send('Erreur lors de la récupération du post');
    }
};

export default getPost;
