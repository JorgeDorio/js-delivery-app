const { registerSchema } = require('./schemas/registerSchema');

const validationRegister = (req, res, next) => {
  const { name, email, password } = req.body;

  const { error } = registerSchema.validate({ name, email, password });

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

module.exports = {
  validationRegister,
};
