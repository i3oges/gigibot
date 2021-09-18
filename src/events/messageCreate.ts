import { Message } from 'discord.js';

const event = {
  name: 'messageCreate',
  once: false,
  execute: (message: Message) => console.log('messageCreate', message),
};
export { event };
