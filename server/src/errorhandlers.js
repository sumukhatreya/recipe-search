const notFound = (req, res, next) => {
  res.status(404);
  const err = new Error(`Resource not found: ${req.originalUrl}.`);
  next(err);
};

const errorHandler = (err, req, res, next) => {
  resStatus = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(resStatus);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : '',
  });
};

module.exports = {
  notFound,
  errorHandler,
};
