import { Message } from 'discord.js';

const event = {
  name: 'messageDelete',
  once: false,
  execute: (message: Message) => console.log('messageDelete', message),
};
export { event };
