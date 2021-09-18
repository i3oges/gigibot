import { Guild, User } from 'discord.js';

const event = {
  name: 'guildBanRemove',
  once: false,
  execute: (guild: Guild, user: User) => console.log('guildBanRemove', guild, user),
};
export { event };
