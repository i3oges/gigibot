import { findAllTextChannels, gigiSpeak } from './utils';
import request from 'axios';
import { Client } from 'discord.js';
export const postDadJoke = async (client: Client) => {
  const channels = findAllTextChannels(client, 'general');
  const { data } = await request('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
  for (const channel of channels) {
    await channel.send(gigiSpeak(data.joke));
    console.log('sent dad joke at', new Date().toString(), 'to', channel.name);
  }
  console.log('sent dad joke at', new Date().toString(), 'to', channels.length, 'channels');
};
