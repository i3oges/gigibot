import { Channel } from 'discord.js';

const event = {
  execute: (newChannel: Channel, oldChannel: Channel) => console.log('channelUpdate', newChannel, oldChannel),
};
export { event };
