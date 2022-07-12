import { Client } from 'discord.js';
import { findAllTextChannels, gigiSpeak } from './utils';

export const postDadJoke = async (client: Client) => {
  const channels = findAllTextChannels(client, 'general');
  const data = await fetch('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } }).then(res => res.json());
  const { joke } = data;
  try {
    for (const channel of channels) {
      await channel.send(gigiSpeak(joke));
      console.log('sent dad joke at', new Date().toString(), 'to', channel.name);
    }
  } catch (err) {
    console.error('error posting joke', err);
  }
  console.log('sent dad joke at', new Date().toString(), 'to', channels.length, 'channels');
};
