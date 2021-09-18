import { Guild, GuildMember, Collection, Snowflake } from 'discord.js';

const event = {
  name: 'guildMemberChunk',
  once: false,
  execute: (members: Collection<Snowflake, GuildMember>, guild: Guild, chunk: any) => console.log('guildMemberChunk', members, guild, chunk),
};
export { event };
