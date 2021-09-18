import { CronJob } from 'cron';
import { Client } from 'discord.js';
import { findAllTextChannels, getFashionReportEmbed } from '../lib/utils';

const everyFridayAtNoonEST = '0 17 * * FRI';
const fashionFriday = (client: Client) =>
  new CronJob(everyFridayAtNoonEST, async () => {
    const embeds = [await getFashionReportEmbed()];
    const channels = findAllTextChannels(client, 'fashion-report');
    await Promise.all(channels.map(channel => channel.send({ embeds })));
    console.log('sent fashion report at', new Date().toString(), 'to', channels.length, 'channels');
  });

const event = {
  name: __filename.slice(__dirname.length + 1, -3),
  once: true,
  execute(client: Client) {
    console.log(`I am ready! Logged in as ${client.user?.tag}!`);
    console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
    fashionFriday(client).start();
  },
};

export { event };
