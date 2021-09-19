import { CronJob } from 'cron';
import { Client, MessageEmbed } from 'discord.js';
import { getFashionReportRedditThread } from './reddit';
import { getSearchString, gigiSpeak, findAllTextChannels, getFashionFridayResetTime } from './utils';

const everyFridayAtNoonEST = '0 17 * * FRI';
export const fashionFridayCron = (client: Client) =>
  new CronJob(everyFridayAtNoonEST, async () => {
    const searchString = getSearchString();
    const thread = await getFashionReportRedditThread(searchString);
    if (!thread) {
      console.error(`could not find this weeks fashion thread with searchString`, searchString, thread);
      return;
    }
    const { data } = thread;
    const { title, url: image, permalink } = data;
    const resetAt = getFashionFridayResetTime();
    const embeds = [
      new MessageEmbed()
        .setTitle(gigiSpeak('it is fashion friday'))
        .setDescription(`${gigiSpeak(title)}\n${gigiSpeak(`Resets in ${resetAt}`)}`)
        .setImage(image)
        .setURL(`https://reddit.com${permalink}`)
        .setColor('#5e9bdc'),
    ];
    const channels = findAllTextChannels(client, 'fashion-report');
    for (const channel of channels) {
      await channel.send({ embeds });
      console.log('sent fashion report at', new Date().toString(), 'to', channel.name);
    }
    console.log('sent fashion report at', new Date().toString(), 'to', channels.length, 'channels');
  });
