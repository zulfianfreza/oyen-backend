const { NotFoundError } = require("../errors");
const Faq = require("../models/faqModel");

const getFaq = async (req) => {
    const result = await Faq.find();

    return result;
};

const createFaq = async (req) => {
    const { question, answer } = req.body;

    const result = await Faq.create({ question, answer });

    return result;
};

const getOneFaq = async (req) => {
    const { id } = req.params;

    const result = await Faq.findOne({ _id: id });

    if (!result) throw new NotFoundError(`Tidak ada faq dengan id: ${id}}`);

    return result;
};

const updateFaq = async (req) => {
    const { id } = req.params;
    const { question, answer } = req.body;

    const result = await Faq.findOneAndUpdate(
        { _id: id },
        { question, answer },
        { new: true, runValidators: true }
    );

    return result;
};

const deleteFaq = async (req) => {
    const { id } = req.params;

    const result = await Faq.findOne({ _id: id });

    if (!result) throw new NotFoundError(`Tidak ada faq dengan id: ${id}}`);

    result.remove();

    return result;
};

module.exports = { getFaq, createFaq, getOneFaq, updateFaq, deleteFaq };
