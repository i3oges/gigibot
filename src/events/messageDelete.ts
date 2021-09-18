import { Message } from 'discord.js';

const event = {
  execute: (message: Message) => console.log('messageDelete', message),
};
export { event };
