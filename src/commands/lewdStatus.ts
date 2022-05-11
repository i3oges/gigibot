import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, GuildMember } from 'discord.js';
import { checkLewd } from '../lib/lewd';
import { gigiSpeak } from '../lib/utils';

const command = {
  data: new SlashCommandBuilder().setName('lewdstatus').setDescription('Get count since last lewd'),
  async execute(interaction: CommandInteraction) {
    const member = interaction.member as GuildMember;
    const LewdCounter = (await (await checkLewd()).get()).count;
    console.log(`${member.displayName} requested lewds`);
    interaction.reply(gigiSpeak(`It has been ${LewdCounter} messages since our last lewd.`));
  },
};
export { command };
