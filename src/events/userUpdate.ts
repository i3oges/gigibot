import { User } from 'discord.js';

const event = {
  name: 'userUpdate',
  once: false,
  execute: (oldUser: User, newUser: User) => console.log('userUpdate', oldUser, newUser),
};
export { event };
