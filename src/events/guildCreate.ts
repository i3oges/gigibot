import { Guild } from 'discord.js';

const event = {
  execute: (guild: Guild) => console.log('guildCreate', guild),
};
export { event };
