import { Emoji } from 'discord.js';

const event = {
  execute: (emojiDelete: Emoji) => console.log('emojiDelete', emojiDelete),
};
export { event };
