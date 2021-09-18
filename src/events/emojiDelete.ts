import { Emoji } from 'discord.js';

const event = {
  name: 'emojiDelete',
  once: false,
  execute: (emojiDelete: Emoji) => console.log('emojiDelete', emojiDelete),
};
export { event };
