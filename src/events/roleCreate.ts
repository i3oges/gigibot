import { Role } from 'discord.js';

const event = {
  execute: (role: Role) => console.log('roleCreate', role),
};
export { event };
