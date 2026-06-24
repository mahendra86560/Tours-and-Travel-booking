const notFound = (req, res, next) => {
  res.status(404);
  next(new Error(`Not Found - ${req.originalUrl}`));
};

const errorHandler = (err, req, res, next) => {
  res.status(res.statusCode === 200 ? 500 : res.statusCode);
  res.json({
    message: err.message
  });
};

module.exports = { notFound, errorHandler };