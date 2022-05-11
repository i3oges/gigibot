import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, GuildMember } from 'discord.js';
import { checkLewd, resetLewd } from '../lib/lewd';
import { gigiSpeak } from '../lib/utils';

const command = {
  data: new SlashCommandBuilder().setName('lewdreset').setDescription('Resets the lewds'),
  async execute(interaction: CommandInteraction) {
    const member = interaction.member as GuildMember;
    const LewdCounter = await (await checkLewd()).get().count;
    await resetLewd();
    console.log(`${member.displayName} reset lewds`);
    interaction.reply(gigiSpeak(`${member.displayName} has reset the lewds. We made it ${LewdCounter} messages since our last lewd.`));
  },
};
export { command };
