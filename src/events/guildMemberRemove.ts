import { GuildMember } from 'discord.js';

const event = {
  execute: (member: GuildMember) => console.log('guildMemberRemove', member),
};
export { event };
