import { Message } from 'discord.js';
const event = {
  name: 'messageUpdate',
  once: false,
  execute: (newMessage: Message, oldMessage: Message) => console.log('messageUpdate', newMessage, oldMessage),
};
export { event };
