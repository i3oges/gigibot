import { Channel } from 'discord.js';

const event = {
  execute: (channel: Channel) => console.log('channelCreate', channel),
};
export { event };
