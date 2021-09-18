import { Role } from 'discord.js';

const event = {
  name: 'roleDelete',
  once: false,
  execute: (role: Role) => console.log('roleDelete', role),
};
export { event };
