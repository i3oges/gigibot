import { Channel, User } from 'discord.js';

const event = {
  name: 'typingStop',
  once: false,
  execute: (channel: Channel, user: User) => console.log('typingStop', channel, user),
};
export { event };
