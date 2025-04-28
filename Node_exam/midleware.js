const validate = (req, res, next) => {
  const { name, email, password } = req.body;
  if (name && email && password) {
    return next();
  } else {
    return res.status(400).send("Invalid data");
  }
};

export default validate;
