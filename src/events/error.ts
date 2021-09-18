import { ErrorEvent } from 'discord.js';

const event = {
  execute: (error: ErrorEvent) => console.log('error', error),
};
export { event };
