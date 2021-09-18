import { Guild } from 'discord.js';

const event = {
  execute: (oldGuild: Guild, newGuild: Guild) => console.log('guildUpdate', oldGuild, newGuild),
};
export { event };
