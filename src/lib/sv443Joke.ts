import request from 'axios';
import { Client } from 'discord.js';
import { findAllTextChannels } from './utils';

// get a joke from https://v2.jokeapi.dev/joke/Any?format=txt
// and post it to the #general channel of the server
export async function postSv443Joke(client: Client) {
  const { data } = await request('https://v2.jokeapi.dev/joke/Any?format=txt&blacklistFlags=racist,sexist,political,nsfw,explicit', {
    headers: { Accept: 'text/plain', 'User-Agent': 'Gigibot' },
  });
  const channels = findAllTextChannels(client, 'general');
  for (const channel of channels) {
    await channel.send(data);
    console.log('sent sv443 joke at', new Date().toString(), 'to', channel.name);
  }
  console.log('sent sv443 joke at', new Date().toString(), 'to', channels.length, 'channels');
}
