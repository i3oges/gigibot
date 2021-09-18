import { Role } from 'discord.js';

const event = {
  execute: (newRole: Role, oldRole: Role) => console.log('roleUpdate', newRole, oldRole),
};
export { event };
