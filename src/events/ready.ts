import { Client } from 'discord.js';
import { affirmationCron, fashionFridayCron, recruitmentPageCron } from '../lib/crons';

const event = {
  once: true,
  execute(client: Client) {
    console.log(`I am ready! Logged in as ${client.user?.tag}!`);
    console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
    console.log(`Joined guilds: ${client.guilds.cache.map(g => g.name)}`);
    fashionFridayCron(client).start();
    affirmationCron(client).start();
    // TODO: chrome process unable to run in RPI
    // recruitmentPageCron(client).start();
  },
};

export { event };
