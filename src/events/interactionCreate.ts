import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import { readdirSync } from 'fs';

interface Command {
  execute: (command: CommandInteraction) => Promise<any>;
  data: SlashCommandBuilder;
  name: string;
}
const commands = new Map<string, Command>();
const commandFiles = readdirSync('./src/commands').filter(file => file.endsWith('.ts'));

for (const file of commandFiles) {
  const { command } = require(`../commands/${file}`);
  commands.set(command.name, command);
}

const event = {
  name: __filename.slice(__dirname.length + 1, -3),
  once: false,
  async execute(interaction: CommandInteraction) {
    if (!interaction.isCommand()) {
      return;
    }

    const command = commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
  },
};

export { event };
