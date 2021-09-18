import { GuildMember } from 'discord.js';

const event = { execute: (oldMember: GuildMember, newMember: GuildMember) => console.log('guildMemberUpdate', oldMember, newMember) };
export { event };
