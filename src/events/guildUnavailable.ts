import { Guild } from 'discord.js';

const event = {
  name: 'guildUnavailable',
  once: false,
  execute: (guild: Guild) => console.log('guildUnavailable', guild),
};
export { event };
