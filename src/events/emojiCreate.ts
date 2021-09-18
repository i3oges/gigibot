import { Emoji } from 'discord.js';

const event = {
  execute: (emojiCreate: Emoji) => console.log('emojiCreate', emojiCreate),
};
export { event };
