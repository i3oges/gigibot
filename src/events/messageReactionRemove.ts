import { MessageReaction, User } from 'discord.js';
const event = {
  name: 'messageReactionRemove',
  once: false,
  execute: (messageReaction: MessageReaction, user: User) => console.log('messageReactionRemove', messageReaction, user),
};
export { event };
