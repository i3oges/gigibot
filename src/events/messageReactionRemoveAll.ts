import { MessageReaction } from 'discord.js';
const event = {
  execute: (messageReaction: MessageReaction) => console.log('messageReactionRemoveAll', messageReaction),
};
export { event };
