const mongoose = require("mongoose");

const replySchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: true,
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

const commentSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: true,
        },
        thread_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Thread",
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        reply: [replySchema],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
