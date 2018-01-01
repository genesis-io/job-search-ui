import Joi from 'joi';

export const loginSchema = Joi.object().keys({
  email: Joi.string().email(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
});

export const extractErrorMessage = (error) => {
  const index1 = error.indexOf('[');
  const index2 = error.indexOf(']');
  return error.substring((index1 + 1), index2);
};

