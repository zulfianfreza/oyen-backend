const mongoose = require("mongoose");

const voteSchema = mongoose.Schema(
    {
        vote: {
            type: String,
            enum: ["up", "down"],
        },
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

module.exports = mongoose.model("vote", voteSchema);
