import { MessageReaction, User } from 'discord.js';
const event = {
  name: 'messageReactionAdd',
  once: false,
  execute: (messageReaction: MessageReaction, user: User) => console.log('messageReactionAdd', messageReaction, user),
};
export { event };
