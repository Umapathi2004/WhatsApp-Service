const client = require('../config/whatsapp');

const sendMessage = async (number, message) => {
  const formattedNumber = number.replace(/\D/g, '');
  const chatId = `91${formattedNumber}@c.us`;
  console.log(message);
 const formattedMessage = formatEmailToWhatsApp(message);
  const isRegistered = await client.isRegisteredUser(chatId);

  if (!isRegistered) {
    throw new Error('Number is not on WhatsApp');
  }
  return await client.sendMessage(chatId, formattedMessage);
  
};
const formatEmailToWhatsApp = (data) => {
  const email = data; 

  let message = `📩 *New Email Summary*\n\n`;

  message += `👤 *From:* ${email.sender_name}\n`;
  message += `📧 *Email:* ${email.sender_email}\n`;
  message += `📝 *Subject:* ${email.subject}\n\n`;

  message += `📖 *Summary:*\n${email.summary}\n\n`;
  message += `🎯 *Intent:* ${email.intent}\n\n`;

  message += `💬 *Replies:*\n`;

  email.replies.forEach((reply, index) => {
    message += `\n${index + 1}. *${reply.subject}*\n`;
    message += `${reply.body}\n`;
  });

  return message;
};
module.exports = { sendMessage };