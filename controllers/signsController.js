import Sign from '../models/sign';

export default class SignController {
  static async findAll(req, res) {
    try {
      const signs = await Sign.find();
      res.json({
        message: 'success',
        data: signs,
      });
    } catch (err) {
      res.status(400).json({
        error: err.message,
      });
    }
  }

  static findOne(req, res) {
    res.json({
      message: 'success',
      data: res.sign,
    });
  }

  static async deleteOne(req, res) {
    try {
      await res.sign.remove();
      res.json({ message: 'Sign Deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
