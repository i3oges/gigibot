import { Guild } from 'discord.js';

const event = {
  execute: (guild: Guild) => console.log('guildMemberAdd', guild),
};
export { event };
