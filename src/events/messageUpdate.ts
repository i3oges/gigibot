import { Message } from 'discord.js';
const event = {
  execute: (newMessage: Message, oldMessage: Message) => console.log('messageUpdate', newMessage, oldMessage),
};
export { event };
