import { Client, TextChannel } from 'discord.js';
import { gigiSpeak } from './utils';
import request from 'axios';

export async function postAffirmation(client: Client) {
  const affirmation = await request('https://affirmations.dev').then(json => json.data.affirmation);
  const channel = client.channels.cache.find((channel: any) => channel.name === 'general') as TextChannel;
  await channel.send(gigiSpeak(affirmation));
  console.log('sent affirmation at', new Date().toString(), 'to', channel.name);
}
