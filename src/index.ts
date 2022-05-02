import { Client, Intents } from 'discord.js';
import { config } from 'dotenv';
import { readdirSync } from 'fs';

config();

var client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS] });

const includedEvents = ['ready', 'guildmemberadd', 'interactioncreate'];
const includedRegexp = new RegExp(includedEvents.join('|'), 'i');
const eventFiles = readdirSync('./src/events').filter(file => includedRegexp.test(file));
console.log(`Loading events ${eventFiles.join(', ')}`);

for (const file of eventFiles) {
  const { event } = require(`./events/${file}`);
  const { execute, once } = event;
  client[once ? 'once' : 'on'](file.slice(0, -3), (...args) => execute(...args));
}

client.login(process.env.BOT_TOKEN);
