import express from 'express';
import Sign from '../models/sign';
import signsController from '../controllers/signsController';
import getSign from '../middlewares/getOneSign';

const router = express.Router();

// Get All
router.get('/', signsController.findAll);

// Get One
router.get('/:id', getSign, signsController.findOne);

// Create One
router.post('/', async (req, res) => {
  const { name, dateStart, dateEnd, dope, luckyNumber } = req.body;
  const sign = new Sign({
    name,
    dateStart,
    dateEnd,
    dope,
    luckyNumber,
  });
  try {
    const newSign = await sign.save();
    res.status(201).json({
      message: 'created',
      data: newSign,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// Patch One
router.patch('/:id', getSign, async (req, res) => {
  const { name, dateStart, dateEnd, dope, luckyNumber } = req.body;

  if (name != null) {
    res.sign.name = name;
  }
  if (dateStart != null) {
    res.sign.dateStart = dateStart;
  }
  if (dateEnd != null) {
    res.sign.dateEnd = dateEnd;
  }
  if (dope != null) {
    res.sign.dope = dope;
  }
  if (luckyNumber != null) {
    res.sign.luckyNumber = luckyNumber;
  }
  try {
    const updatedSign = await res.sign.save();
    res.json({
      message: 'updated',
      data: updatedSign,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete One
router.delete('/:id', getSign, signsController.deleteOne);

module.exports = router;
