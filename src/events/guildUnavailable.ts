import { Guild } from 'discord.js';

const event = {
  execute: (guild: Guild) => console.log('guildUnavailable', guild),
};
export { event };
