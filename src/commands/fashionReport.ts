import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import { getFashionReportEmbed } from '../lib/utils';

const command = {
  name: 'fashionreport',
  data: new SlashCommandBuilder().setName('fashionreport').setDescription('Retrieves Fashion Report for this week'),
  async execute(interaction: CommandInteraction) {
    const embeds = [await getFashionReportEmbed()];
    await interaction.reply({ embeds });
  },
};
export { command };
