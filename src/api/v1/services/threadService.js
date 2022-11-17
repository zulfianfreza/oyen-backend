const slug = require("slug");
const Thread = require("../models/threadModel");
const Category = require("../models/categoryModel");
const { BadRequestError, NotFoundError } = require("../errors");

const getThread = async (req) => {
    const result = await Thread.find()
        .populate({
            path: "category",
            select: "_id name slug description",
        })
        .populate("user_id");

    return result;
};

const createThread = async (req) => {
    const user = req.user;
    const { title, content, category } = req.body;

    const result = await Thread.create({
        title,
        slug: slug(title),
        content,
        category,
        user_id: user.id,
    });

    console.log(req.body);

    return result;
};

const getThreadById = async (req) => {
    const { id } = req.params;

    const result = await Thread.findOne({ _id: id });

    if (!result) throw new NotFoundError(`Tidak ada thread dengan id: ${id}`);

    return result;
};

const getThreadByCategory = async (req) => {
    const { slug_category } = req.params;

    const category = Category.findOne({ slug: slug_category });

    const result = await Thread.aggregate([
        {
            $unwind: "$category",
        },
        {
            $lookup: {
                from: "categories",
                localField: "category",
                foreignField: "_id",
                as: "category",
            },
        },
        {
            $match: {
                "category.slug": slug_category,
            },
        },
    ]);

    return result;
};

module.exports = {
    getThread,
    createThread,
    getThreadById,
    getThreadByCategory,
};
