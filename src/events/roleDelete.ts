import { Role } from 'discord.js';

const event = {
  execute: (role: Role) => console.log('roleDelete', role),
};
export { event };
