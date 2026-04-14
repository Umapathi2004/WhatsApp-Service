const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

client.on('qr', (qr) => {
  console.log('Scan QR Code:');
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('WhatsApp Client Ready!');
});

client.on('auth_failure', (msg) => {
  console.error(' AUTH FAILURE:', msg);
});

client.on('disconnected', (reason) => {
  console.log('Disconnected:', reason);
});

client.initialize().catch(err => {
  console.error('Init Error:', err);
});

module.exports = client;    