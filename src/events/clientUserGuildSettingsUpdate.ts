import { ClientUserEditData } from 'discord.js';

const event = {
  execute: (clientUserGuildSettingsUpdate: ClientUserEditData) => console.log('clientUserGuildSettingsUpdate', clientUserGuildSettingsUpdate),
};
export { event };
