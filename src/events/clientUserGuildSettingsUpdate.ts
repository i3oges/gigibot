import { ClientUserEditData } from 'discord.js';

const event = {
  name: 'clientUserGuildSettingsUpdate',
  once: false,
  execute: (clientUserGuildSettingsUpdate: ClientUserEditData) => console.log('clientUserGuildSettingsUpdate', clientUserGuildSettingsUpdate),
};
export { event };
