import { User } from 'discord.js';

const event = {
  execute: (oldUser: User, newUser: User) => console.log('userUpdate', oldUser, newUser),
};
export { event };
