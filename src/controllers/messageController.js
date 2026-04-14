const whatsappService = require('../services/whatsappService');

const sendMessage = async (req, res) => {
  try {
    const { number, message } = req.body;

    await whatsappService.sendMessage(number, message);

    res.json({ success: true, message: 'Message sent!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { sendMessage };