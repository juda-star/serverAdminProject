const authPage = (premissions) => {
  return (req, res, next) => {
    const userRole = req.body.role;
    if (premissions.includes(userRole)) {
      next();
    } else {
      return res.status(401).json("you dont have premission!");
    }
  };
};
const authCourse = (req, res, next) => {
  const courseNumber = parseInt(req.params.number);
  if (req.body.courses.includes(courseNumber)) {
    next();
  } else {
    return res.status(401).json("you dont have access to this course!");
  }
};
module.exports = { authPage, authCourse };
