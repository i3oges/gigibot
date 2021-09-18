import { MessageReaction } from 'discord.js';
const event = {
  name: 'messageReactionRemoveAll',
  once: false,
  execute: (messageReaction: MessageReaction) => console.log('messageReactionRemoveAll', messageReaction),
};
export { event };
