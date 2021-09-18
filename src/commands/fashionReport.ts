import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, MessageEmbed } from 'discord.js';
import { getFashionReportRedditThread } from '../lib/reddit';
import { getSearchString, gigiSpeak } from '../lib/utils';

const command = {
  data: new SlashCommandBuilder().setName('fashionreport').setDescription('Retrieves Fashion Report for this week'),
  async execute(interaction: CommandInteraction) {
    const searchString = getSearchString();
    const thread = await getFashionReportRedditThread(searchString);
    if (!thread) {
      await interaction.reply(gigiSpeak('i could not find the latest fashion report'));
      return;
    }
    const { data } = thread;
    const { title, url: image, permalink } = data;
    const embeds = [new MessageEmbed().setTitle(gigiSpeak(title)).setImage(image).setURL(`https://reddit.com${permalink}`)];
    await interaction.reply({ embeds });
  },
};
export { command };
