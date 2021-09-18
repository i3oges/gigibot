import { Channel } from 'discord.js';

const event = {
  execute: (channel: Channel, time: Date) => console.log('channelPinsUpdate', channel, time),
};
export { event };
