const mongoose = require("mongoose");

const bookmarkSchema = mongoose.Schema(
    {
        thread_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Thread",
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Bookmark", bookmarkSchema);
