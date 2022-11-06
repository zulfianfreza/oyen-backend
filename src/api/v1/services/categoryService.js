const slug = require("slug");
const Category = require("../models/categoryModel");
const { BadRequestError, NotFoundError } = require("../errors");

const getCategory = async (req) => {
    const result = await Category.find();

    return result;
};

const createCategory = async (req) => {
    const { name, description } = req.body;

    if (!name || !description)
        throw new BadRequestError("Please provide name and description");

    const check = await Category.findOne({ name });

    if (check) throw new BadRequestError("Nama kategori sudah ada");

    const result = await Category.create({
        name,
        slug: slug(name),
        description,
    });

    return result;
};

const getOneCategory = async (req) => {
    const { id } = req.params;

    const result = await Category.findOne({ _id: id });

    if (!result) throw new NotFoundError(`Tidak ada kategory dengan id: ${id}`);

    return result;
};

const updateCategory = async (req) => {
    const { id } = req.params;
    const { name, description } = req.body;

    // const check = await Category.findOne({ name });

    // if (check) throw new BadRequestError("Nama kategori sudah ada");

    const result = await Category.findOneAndUpdate(
        { _id: id },
        { name, slug: slug(name), description },
        { new: true, runValidators: true }
    );

    return result;
};

const deleteCategory = async (req) => {
    const { id } = req.params;

    const result = await Category.findOne({ _id: id });

    if (!result) throw new NotFoundError(`Tidak ada kategori dengan id: ${id}`);

    result.remove();

    return result;
};

module.exports = {
    getCategory,
    createCategory,
    getOneCategory,
    updateCategory,
    deleteCategory,
};
