import { GuildMember } from 'discord.js';

const event = {
  name: 'guildMemberRemove',
  once: false,
  execute: (member: GuildMember) => console.log('guildMemberRemove', member),
};
export { event };
