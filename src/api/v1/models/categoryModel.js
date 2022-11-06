const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
        },
        description: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
