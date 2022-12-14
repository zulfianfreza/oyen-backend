const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
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
        no_telephone: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        date_of_birth: {
            type: String,
            required: true,
        },
        job: {
            type: String,
            default: "",
        },
        bio: {
            type: String,
            default: "",
        },
        profile_picture: {
            type: String,
        },
        role: {
            type: String,
            default: "user",
        },
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    const User = this;
    if (User.isModified("password")) {
        User.password = await bcrypt.hash(User.password, 12);
    }
    User.profile_picture = `https://robohash.org/${
        User.firstname + User.lastname
    }.jpg?set=set4`;
    next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);

    return isMatch;
};

module.exports = mongoose.model("User", userSchema);
