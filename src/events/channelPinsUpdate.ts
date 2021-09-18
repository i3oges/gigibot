import { Channel } from 'discord.js';

const event = {
  name: 'channelPinsUpdate',
  once: false,
  execute: (channel: Channel, time: Date) => console.log('channelPinsUpdate', channel, time),
};
export { event };
