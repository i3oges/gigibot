import { Guild } from 'discord.js';

const event = {
  execute: (guild: Guild) => console.log('guildDelete', guild),
};
export { event };
