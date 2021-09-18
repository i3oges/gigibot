import { Message } from 'discord.js';

const event = { execute: (message: Message) => console.log('messageCreate', message) };
export { event };
