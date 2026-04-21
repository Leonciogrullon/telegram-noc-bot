const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

console.log("Bot corriendo...");

// escuchar mensajes
bot.on("message", (msg) => {
  console.log("Mensaje recibido:", msg.text);

  // ejemplo: responder
  if (msg.text && msg.text.includes("fallidas")) {
    const match = msg.text.match(/ID[:\s]+(\w+)/i);

    if (match) {
      const providerId = match[1];

      bot.sendMessage(msg.chat.id, `ID detectado: ${providerId}`);
    }
  }
});