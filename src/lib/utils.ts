import { Client, Guild, TextChannel } from 'discord.js';
import dayjs from 'dayjs';

function findTextChannel(guild: Guild, name: string): TextChannel | undefined {
  return guild.channels.cache.find(channel => channel instanceof TextChannel && channel.name === name) as TextChannel;
}

export function findAllTextChannels(client: Client, name: string): TextChannel[] {
  return client.guilds.cache.reduce((acc: TextChannel[], guild) => {
    const channel = findTextChannel(guild, name);
    if (channel) {
      acc.push(channel);
    }
    return acc;
  }, []);
}

export function gigiSpeak(input: string): string {
  return input
    .toLowerCase()
    .split('')
    .map(str => (Math.floor(Math.random() * 4) % 2 ? str.toUpperCase() : str))
    .join('');
}

function getClosestLastFriday(): Date {
  const oneDay = 86400;
  let date = new Date();
  while (date.getDay() !== 5) {
    date = new Date(date.getTime() - oneDay);
  }
  return date;
}

function getClosestNextTuesday(): dayjs.Dayjs {
  const oneDay = 86400;
  let date = new Date();
  while (date.getDay() !== 2) {
    date = new Date(date.getTime() + oneDay);
  }
  return dayjs(date).hour(4);
}

export function getFashionFridayResetTime(): string {
  let seconds = getClosestNextTuesday().diff(new Date(), 'seconds');
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  const dDisplay = d > 0 ? d + (d == 1 ? ' day, ' : ' days, ') : '';
  const hDisplay = h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '';
  const mDisplay = m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes, ') : '';
  const sDisplay = s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '';
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

export function getSearchString(): string {
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  const startDate = new Date('1/26/2018').getTime();
  const friday = getClosestLastFriday();
  const weekNumber = Math.floor(Math.abs(friday.getTime() - startDate) / oneWeek);
  return `Fashion Report - Full Details - For Week of ${friday.getMonth() + 1}/${friday.getDate()}/${friday.getFullYear()} (Week ${weekNumber})`;
}
