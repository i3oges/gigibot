import { Channel } from 'discord.js';

const event = {
  name: 'channelUpdate',
  once: false,
  execute: (newChannel: Channel, oldChannel: Channel) => console.log('channelUpdate', newChannel, oldChannel),
};
export { event };
