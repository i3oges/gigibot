import { MessageReaction, User } from 'discord.js';
const event = {
  execute: (messageReaction: MessageReaction, user: User) => console.log('messageReactionAdd'),
};
export { event };
