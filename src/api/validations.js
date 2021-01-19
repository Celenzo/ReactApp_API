'use strict';

const Joi = require('@hapi/joi');

module.exports = () => {
    const addMessage = {
        payload: Joi.object().keys({
            msg: Joi.string().required()
        })
    };

    const updateConv = {
        payload: Joi.object().keys({
            convid: Joi.string().required(),
            status: Joi.boolean().required()
        })
    };

    const createConv = {
        payload: Joi.object().keys({
            name: Joi.string().required()
        })
    };

    return {
        addMessage,
        updateConv,
        createConv
    }
}