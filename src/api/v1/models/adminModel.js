const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

adminSchema.pre("save", async function (next) {
    const Admin = this;
    if (Admin.isModified("password")) {
        Admin.password = await bcrypt.hash(Admin.password, 12);
    }
    next();
});

adminSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);

    return isMatch;
};

module.exports = mongoose.model("Admin", adminSchema);
