import { GuildMember } from 'discord.js';

const event = {
  execute: (oldMember: GuildMember, newMember: GuildMember) => console.log('voiceStateUpdate', oldMember, newMember),
};
export { event };
