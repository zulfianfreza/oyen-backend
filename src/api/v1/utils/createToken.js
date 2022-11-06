const createTokenAdmin = (admin) => {
    return {
        adminId: admin._id,
        name: admin.name,
        email: admin.email,
        password: admin.password,
    };
};

const createTokenUser = (user) => {
    return {
        userId: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
        noTelephone: user.no_telephone,
        gender: user.gender,
        dateOfBirth: user.date_of_birth,
        job: user.job,
        bio: user.bio,
        profilePicture: user.profile_picture,
        role: user.role,
    };
};

module.exports = { createTokenAdmin, createTokenUser };
