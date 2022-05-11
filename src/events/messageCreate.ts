import { Message } from 'discord.js';
import { addLewd } from '../lib/lewd';

const event = {
  execute: async (message: Message) => {
    await addLewd();
  },
};
export { event };
