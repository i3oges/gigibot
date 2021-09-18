import { Channel, User } from 'discord.js';

const event = {
  name: 'typingStart',
  once: false,
  execute: (channel: Channel, user: User) => console.log('typingStart', channel, user),
};
export { event };
