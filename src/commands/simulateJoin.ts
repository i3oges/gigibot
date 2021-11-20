import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, GuildMember, Permissions } from 'discord.js';

const command = {
  data: new SlashCommandBuilder().setName('simjoin').setDescription('Simulates joining the server'),
  async execute(interaction: CommandInteraction) {
    const member = interaction.member as GuildMember;
    if (member.permissions.has(Permissions.FLAGS.ADMINISTRATOR) && interaction.client.emit('guildMemberAdd', member)) {
      interaction.reply(`${member.displayName} simulated a join`);
    }
  },
};
export { command };
