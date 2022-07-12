import { Client } from 'discord.js';
import { findAllTextChannels } from './utils';
export const postInspiration = async (client: Client) => {
  const channels = findAllTextChannels(client, 'inspiration');
  // fetch from inspirobot
  const { data } = await fetch('https://inspirobot.me/api?generate=true').then(res => res.json());
  for (const channel of channels) {
    await channel.send(data);
    console.log('sent inspiration at', new Date().toString(), 'to', channel.name);
  }
  console.log('sent inspiration at', new Date().toString(), 'to', channels.length, 'channels');
};
