import { ErrorEvent } from 'discord.js';

const event = {
  name: 'error',
  once: false,
  execute: (error: ErrorEvent) => console.log('error', error),
};
export { event };
