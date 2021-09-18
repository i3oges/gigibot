import { Guild } from 'discord.js';

const event = {
  name: 'guildCreate',
  once: false,
  execute: (guild: Guild) => console.log('guildCreate', guild),
};
export { event };
