import { Emoji } from 'discord.js';

const event = {
  execute: (oldEmoji: Emoji, newEmoji: Emoji) => console.log('emojiUpdate', oldEmoji, newEmoji),
};
export { event };
