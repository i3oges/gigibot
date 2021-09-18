import { Role } from 'discord.js';

const event = {
  name: 'roleUpdate',
  once: false,
  execute: (newRole: Role, oldRole: Role) => console.log('roleUpdate', newRole, oldRole),
};
export { event };
