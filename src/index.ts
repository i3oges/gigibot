import { Client, Intents } from 'discord.js';
import { config } from 'dotenv';
import { readdirSync } from 'fs';

config();

var client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// event handler
const eventFiles = readdirSync('./src/events').filter(file => file.endsWith('.ts'));

for (const file of eventFiles) {
  const { event } = require(`./events/${file}`);

  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

client.login(process.env.BOT_TOKEN);
