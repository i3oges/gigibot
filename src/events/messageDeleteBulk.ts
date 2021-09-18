import { Message, Collection, Snowflake } from 'discord.js';
const event = {
  execute: (messages: Collection<Snowflake, Message>) => console.log('messageDeleteBulk', messages),
};
export { event };
