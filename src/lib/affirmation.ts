import { Client, TextChannel } from 'discord.js';
import { findAllTextChannels, gigiSpeak } from './utils';

export async function postAffirmation(client: Client) {
  const affirmation = await fetch('https://affirmations.dev')
    .then(res => res.json())
    .then(json => json.data.affirmation);

  const channels = findAllTextChannels(client, 'general');
  for (const channel of channels) {
    await channel.send(gigiSpeak(affirmation));
    console.log('sent affirmation at', new Date().toString(), 'to', channel.name);
  }
}
