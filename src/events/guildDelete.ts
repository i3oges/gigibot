import { Guild } from 'discord.js';

const event = {
  name: 'guildDelete',
  once: false,
  execute: (guild: Guild) => console.log('guildDelete', guild),
};
export { event };
