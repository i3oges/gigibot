import { ClientUserEditData } from 'discord.js';

const event = {
  name: 'clientUserSettingsUpdate',
  once: false,
  execute: (clientUserSettingsUpdate: ClientUserEditData) => console.log('clientUserSettingsUpdate', clientUserSettingsUpdate),
};
export { event };
