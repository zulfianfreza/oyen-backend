const Comment = require("../models/commentModel");

const getComment = async (req) => {
    const { id } = req.params;

    const result = Comment.findOne({ _id: id });

    return result;
};

const addComment = async (req) => {
    const user = req.user;
    const { thread_id } = req.params;
    const { text } = req.body;

    const result = Comment.create({ text, thread_id, user_id: user.id });

    return result;
};

const addReply = async (req) => {
    const user = req.user;
    const { comment_id } = req.params;
    const { text } = req.body;

    const result = Comment.findOneAndUpdate(
        { _id: comment_id },
        { $push: { reply: { text, user_id: user.id } } }
    );

    return result;
};

const deleteComment = async (req) => {};

const deleteReply = async (req) => {};

module.exports = {
    addComment,
    addReply,
    deleteComment,
    getComment,
    deleteReply,
};
