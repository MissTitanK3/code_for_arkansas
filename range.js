module.exports = (req, res, next) => {
  res.header('Content-Range', 'Posts: 0-20/20')
  next()
}