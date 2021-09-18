import { Guild } from 'discord.js';

const event = {
  name: 'guildUpdate',
  once: false,
  execute: (oldGuild: Guild, newGuild: Guild) => console.log('guildUpdate', oldGuild, newGuild),
};
export { event };
