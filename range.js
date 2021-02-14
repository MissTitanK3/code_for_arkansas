module.exports = (req, res, next) => {
  res.header('Content-Range', 'All')
  next()
}