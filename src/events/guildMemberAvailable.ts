import { GuildMember } from 'discord.js';

const event = {
  name: 'guildMemberAvailable',
  once: false,
  execute: (member: GuildMember) => console.log('guildMemberAvailable', member),
};
export { event };
