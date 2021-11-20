import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { readdirSync } from 'fs';
import { config } from 'dotenv';

config();

const commands = [];
const commandFiles = readdirSync('src/commands').filter(file => file.endsWith('.ts'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN);

(async () => {
  try {
    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
      body: commands,
    });

    console.log('Successfully registered application commands.');
  } catch (error) {
    console.error(error);
  }
})();
