import { Role } from 'discord.js';

const event = {
  name: 'roleCreate',
  once: false,
  execute: (role: Role) => console.log('roleCreate', role),
};
export { event };
