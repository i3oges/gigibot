import { GuildMember } from 'discord.js';

const event = {
  execute: (member: GuildMember) => console.log('guildMemberAvailable', member),
};
export { event };
