import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { environment } from './env';

const commands = [new SlashCommandBuilder().setName('fashionreport').setDescription('Retrieves Fashion Report for this week')].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(environment.botToken);

(async () => {
  try {
    await rest.put(Routes.applicationCommands(environment.clientID), {
      body: commands,
    });

    console.log('Successfully registered application commands.');
  } catch (error) {
    console.error(error);
  }
})();
