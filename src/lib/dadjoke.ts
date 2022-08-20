import { findAllTextChannels, gigiSpeak } from './utils';
import request from 'axios';
import { Client } from 'discord.js';
export const postDadJoke = async (client: Client) => {
  const channels = findAllTextChannels(client, 'general');
  const { data } = await request('https://icanhazdadjoke.com/', { headers: { Accept: 'text/plain', 'User-Agent': 'Gigibot (https://github.com/i3oges/gigibot)' } });
  for (const channel of channels) {
    await channel.send(gigiSpeak(data));
    console.log('sent dad joke at', new Date().toString(), 'to', channel.name);
  }
  console.log('sent dad joke at', new Date().toString(), 'to', channels.length, 'channels');
};
