import { Client, Intents } from 'discord.js';
import { config } from 'dotenv';
import { readdirSync } from 'fs';

config();

var client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const eventFiles = readdirSync('./src/events').filter(file => file.endsWith('.ts'));

for (const file of eventFiles) {
  const { event } = require(`./events/${file}`);
  const { execute, once } = event;
  client[once ? 'once' : 'on'](file.slice(0, -3), (...args) => execute(...args));
}

client.login(process.env.BOT_TOKEN);
