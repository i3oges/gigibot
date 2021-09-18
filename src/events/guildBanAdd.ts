import { Guild, User } from 'discord.js';

const event = {
  execute: (guild: Guild, user: User) => console.log('guildBanAdd', guild, user),
};
export { event };
