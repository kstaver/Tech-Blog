const { Post } = require('../models');

const postData = [
    {
        title: "",
        post_content: "",
        user_id:
    },
    {
        title: "",
        post_content: "",
        user_id:
    },
    {
        title: "",
        post_content: "",
        user_id:
    },
    {
        title: "",
        post_content: "",
        user_id:
    },
    {
        title: "",
        post_content: "",
        user_id:
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;