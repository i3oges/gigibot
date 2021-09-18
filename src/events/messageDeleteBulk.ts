import { Message, Collection, Snowflake } from 'discord.js';
const event = {
  name: 'messageDeleteBulk',
  once: false,
  execute: (messages: Collection<Snowflake, Message>) => console.log('messageDeleteBulk', messages),
};
export { event };
