import { Client, Guild, MessageEmbed, TextChannel } from 'discord.js';
import { getFashionReportRedditThread } from './reddit';

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

export async function getFashionReportEmbed() {
  const thread = await getFashionReportRedditThread();
  const { data } = thread;
  const { title, url: image, permalink } = data;
  return new MessageEmbed().setTitle(gigiSpeak(title)).setImage(image).setURL(`https://reddit.com${permalink}`);
}
