const jwt = require('jsonwebtoken');

const generateToken = () => {
  return jwt.sign('hemant', '007', { expiresIn: '21d' });
};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, '007', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

module.exports = {
  generateToken,
  verifyToken,
};
