const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
    {
        comment: {
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
        // pinned: {
        //     type: Boolean,
        // },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
