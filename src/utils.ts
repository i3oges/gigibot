import { Client, MessageEmbed, TextChannel } from 'discord.js';
import { getFashionReportRedditThread } from './reddit';

export function findTextChannel(client: Client, name: string): TextChannel | undefined {
  return client.channels.cache.find(channel => channel instanceof TextChannel && channel.name === name) as TextChannel;
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
  const embed = new MessageEmbed().setTitle(gigiSpeak(title)).setImage(image).setURL(`https://reddit.com${permalink}`);
  return embed;
}
