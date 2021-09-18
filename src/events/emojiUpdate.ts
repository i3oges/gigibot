import { Emoji } from 'discord.js';

const event = {
  name: 'emojiUpdate',
  once: false,
  execute: (oldEmoji: Emoji, newEmoji: Emoji) => console.log('emojiUpdate', oldEmoji, newEmoji),
};
export { event };
