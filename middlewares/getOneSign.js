import Sign from '../models/sign';

// Get One Middleware
async function getSign(req, res, next) {
  let sign;
  try {
    sign = await Sign.findById(req.params.id);
    if (sign == null) {
      return res.status(404).json({ message: 'Sign not found' });
    }
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
  res.sign = sign;
  next();
}

export default getSign;
