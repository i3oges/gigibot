import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, GuildMember, Permissions } from 'discord.js';
import { gigiSpeak } from '../lib/utils';

const command = {
  data: new SlashCommandBuilder().setName('kill').setDescription('Restart the bot'),
  async execute(interaction: CommandInteraction) {
    const member = interaction.member as GuildMember;
    if (member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
      interaction.reply(gigiSpeak(`${member.displayName} has initiated my restart sequence`));
      setTimeout(() => process.exit(0), 10000);
    } else {
      interaction.reply(gigiSpeak('You do not have permission to use this command'));
    }
  },
};
export { command };
