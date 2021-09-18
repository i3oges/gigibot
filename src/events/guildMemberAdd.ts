import { Guild } from 'discord.js';

const event = {
  name: 'guildMemberAdd',
  once: false,
  execute: (guild: Guild) => console.log('guildMemberAdd', guild),
};
export { event };
