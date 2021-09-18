import { Client } from 'discord.js';
import { fashionFridayCron } from '../lib/crons';

const event = {
  once: true,
  execute(client: Client) {
    console.log(`I am ready! Logged in as ${client.user?.tag}!`);
    console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
    fashionFridayCron(client).start();
  },
};

export { event };
