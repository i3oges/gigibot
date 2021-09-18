import { Channel } from 'discord.js';

const event = {
  name: 'channelDelete',
  once: false,
  execute: (channel: Channel) => console.log('channelDelete', channel),
};
export { event };
