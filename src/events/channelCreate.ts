import { Channel } from 'discord.js';

const event = {
  name: 'channelCreate',
  once: false,
  execute: (channel: Channel) => console.log('channelCreate', channel),
};
export { event };
