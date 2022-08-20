import request from 'axios';
import { Client } from 'discord.js';
import { findAllTextChannels } from './utils';
export const postInspiration = async (client: Client) => {
  const channels = findAllTextChannels(client, 'inspiration');
  // fetch from inspirobot
  const { data } = await request('https://inspirobot.me/api?generate=true');
  for (const channel of channels) {
    await channel.send(data);
    console.log('sent inspiration at', new Date().toString(), 'to', channel.name);
  }
  console.log('sent inspiration at', new Date().toString(), 'to', channels.length, 'channels');
};
