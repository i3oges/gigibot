import { Guild, User } from 'discord.js';

const event = {
  name: 'guildBanAdd',
  once: false,
  execute: (guild: Guild, user: User) => console.log('guildBanAdd', guild, user),
};
export { event };
