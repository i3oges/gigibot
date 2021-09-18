import { Guild } from 'discord.js';

const event = {
  name: 'guildIntegrationsUpdate',
  once: false,
  execute: (guild: Guild) => console.log('guildIntegrationsUpdate', guild),
};
export { event };
