import { GuildMember } from 'discord.js';

const event = {
  name: 'voiceStateUpdate',
  once: false,
  execute: (oldMember: GuildMember, newMember: GuildMember) => console.log('voiceStateUpdate', oldMember, newMember),
};
export { event };
