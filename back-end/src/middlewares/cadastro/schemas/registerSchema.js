const Joi = require('joi');

const registerSchema = Joi.object({
  name: Joi.string().min(12).empty().required()
    .messages({
      'string.min': 'Digite o seu Nome Completo',
      'string.empty': 'O campo "nome" não pode ser vazio',
      'any.required': 'O campo "nome" é obrigatório',
    }),
  email: Joi.string().email().empty().required()
    .messages({
      'string.email': 'O "email" deve ter o formato "email@email.com"',
      'any.required': 'O campo "email" é obrigatório',
      'string.empty': 'O campo "email" não pode ser vazio',
    }),
  password: Joi.string().min(6).empty().required()
    .messages({
      'string.min': 'O "password" deve ter pelo menos 6 caracteres',
      'any.required': 'O campo "password" é obrigatório',
      'string.empty': 'O campo "password" não pode ser vazio',
    }),
});

module.exports = {
  registerSchema,
};
