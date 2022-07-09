import { CronJob } from 'cron';
import { Client, MessageEmbed } from 'discord.js';
import { postAffirmation } from './affirmation';
import { checkRecruitmentPage } from './checkRecruitmentPage';
import { postDadJoke } from './dadjoke';
import { postInspiration } from './inspiration';
import { getFashionReportRedditThread } from './reddit';
import { findAllTextChannels, getFashionFridayResetTime, getSearchString, gigiSpeak } from './utils';

const everyFridayAtNoonEST = '0 17 * * FRI';
const everyDayAtNoonEST = '0 17 * * *';
const everyDayAtEightESTAndEightPMEST = '0 8,20 * * *';
const everyDayAtThreePMEST = '0 15 * * *';
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

export const recruitmentPageCron = (client: Client) =>
  new CronJob(everyDayAtNoonEST, async () => {
    checkRecruitmentPage(client);
  });

export const affirmationCron = (client: Client) =>
  new CronJob(everyDayAtNoonEST, async () => {
    postAffirmation(client);
  });

// post a picture from inspirobot every day at 8:00 EST
export const inspirationCron = (client: Client) =>
  new CronJob(everyDayAtEightESTAndEightPMEST, async () => {
    postInspiration(client);
  });

export const dadJokeCron = (client: Client) =>
  new CronJob(everyDayAtThreePMEST, async () => {
    postDadJoke(client);
  });
