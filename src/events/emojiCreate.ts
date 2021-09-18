import { Emoji } from 'discord.js';

const event = {
  name: 'emojiCreate',
  once: false,
  execute: (emojiCreate: Emoji) => console.log('emojiCreate', emojiCreate),
};
export { event };
