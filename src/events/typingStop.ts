import { Channel, User } from 'discord.js';

const event = {
  execute: (channel: Channel, user: User) => console.log('typingStop', channel, user),
};
export { event };
