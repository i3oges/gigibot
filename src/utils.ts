import { Client, TextChannel } from 'discord.js';

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
