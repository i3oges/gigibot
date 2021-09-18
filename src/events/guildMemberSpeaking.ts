import { GuildMember } from 'discord.js';

const event = {
  name: 'guildMemberSpeaking',
  once: false,
  execute: (member: GuildMember, speaking: boolean) => console.log('guildMemberSpeaking', member, speaking),
};
export { event };
