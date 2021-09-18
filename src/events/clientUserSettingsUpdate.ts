import { ClientUserEditData } from 'discord.js';

const event = {
  execute: (clientUserSettingsUpdate: ClientUserEditData) => console.log('clientUserSettingsUpdate', clientUserSettingsUpdate),
};
export { event };
