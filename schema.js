const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),  // Added parentheses
        description: Joi.string().required(),  // Added parentheses
        country: Joi.string().required(),  // Added parentheses
        location: Joi.string().required(),  // Added parentheses
        image: Joi.string().allow("", null),  // This is fine
        price: Joi.number().required().min(0),  // Added parentheses
    }).required()  // This is fine
});

module.exports.reviewSchema = Joi.object({
    review:Joi.object({
        rating:Joi.number().required().min(1).max(5),
        comment:Joi.string().required(),
    }).required()
})