import { Client, Guild, TextChannel } from 'discord.js';

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

export function getSearchString(): string {
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  const startDate = new Date('1/26/2018').getTime();
  const friday = getClosestLastFriday();
  const weekNumber = Math.floor(Math.abs(friday.getTime() - startDate) / oneWeek);
  return `Fashion Report - Full Details - For Week of ${friday.getMonth() + 1}/${friday.getDate()}/${friday.getFullYear()} (Week ${weekNumber})`;
}
