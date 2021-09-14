import { CronJob } from 'cron';
import { Client, Intents, MessageEmbed } from 'discord.js';
import { environment } from './env';
import { getImageFromReddit } from './reddit';
import { getFashionReportGoogleSearchResult } from './serp';
import { findTextChannel, gigiSpeak } from './utils';

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const everyFridayAtNoon = '0 12 * * FRI';
client.once('ready', () => {
  console.log('ready');
  new CronJob(everyFridayAtNoon, async () => {
    const { title, link } = await getFashionReportGoogleSearchResult();
    const [, , , , postID] = new URL(link).pathname.split('/');
    const image = await getImageFromReddit(postID);
    const fashionEmbed = new MessageEmbed().setImage(image).setURL(link).setTitle(gigiSpeak(title));
    await findTextChannel(client, 'fashion-report')?.send({ embeds: [fashionEmbed] });
    console.log('sent fashion report at', new Date().toString());
  }).start();
});

client.login(environment.botToken);
