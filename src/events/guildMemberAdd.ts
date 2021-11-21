import { GuildMember } from 'discord.js';
import welcomeUser from '../lib/welcomeUser';

const event = {
  execute: async (member: GuildMember) => {
    console.log(`${member.user.username} joined the server.`);
    if (process.env.WELCOME_MEMBERS === 'true') {
      welcomeUser(member);
    }
  },
};
export { event };
