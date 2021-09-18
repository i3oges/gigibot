import { Guild } from 'discord.js';

const event = {
  execute: (guild: Guild) => console.log('guildIntegrationsUpdate', guild),
};
export { event };
