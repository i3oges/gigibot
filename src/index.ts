import { Collection } from '@discordjs/collection';
import { CronJob } from 'cron';
import { Client, Intents } from 'discord.js';
import { environment } from './env';
import { findTextChannel, getFashionReportEmbed } from './utils';

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const everyFridayAtNoon = '0 15 * * FRI';
const commands = new Collection();

client.once('ready', async () => {
  console.log('ready');
  new CronJob(everyFridayAtNoon, async () => {
    const fashionEmbed = await getFashionReportEmbed();
    await findTextChannel(client, 'fashion-report')?.send({ embeds: [fashionEmbed] });
    console.log('sent fashion report at', new Date().toString());
  }).start();
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) {
    return;
  }

  const { commandName } = interaction;

  if (commandName === 'fashionreport') {
    const fashionEmbed = await getFashionReportEmbed();
    await interaction.reply({ embeds: [fashionEmbed] });
  }
});

client.login(environment.botToken);
