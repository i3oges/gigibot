import { Channel } from 'discord.js';

const event = {
  execute: (channel: Channel) => console.log('channelDelete', channel),
};
export { event };
