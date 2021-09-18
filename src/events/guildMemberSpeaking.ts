import { GuildMember } from 'discord.js';

const event = {
  execute: (member: GuildMember, speaking: boolean) => console.log('guildMemberSpeaking', member, speaking),
};
export { event };
