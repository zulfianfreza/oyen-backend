const mongoose = require("mongoose");

const voteSchema = mongoose.Schema(
    {
        thread_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Thread",
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        vote: {
            type: String,
            enum: ["up", "down"],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("vote", voteSchema);
