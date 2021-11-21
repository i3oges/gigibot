import { GuildMember, TextChannel } from 'discord.js';
import { gigiSpeak } from './utils';

export default async function (member: GuildMember) {
  const regularRole = member.guild.roles.cache.find(r => r.name === 'regular');
  if (!regularRole) {
    return;
  }
  const welcomeMessage = await member?.send(
    `${gigiSpeak(
      'Welcome to the Obsidian Weapon Discord, rule #1: have fun and be courteous to everyone in the server! please react with 👍 to confirm you read the rules. you have 60 seconds to comply'
    )}`
  );
  console.log(`Sent welcome message to ${member.user.username}.`);
  await welcomeMessage.react('👍');
  await welcomeMessage.react('👎');
  const collected = await welcomeMessage.awaitReactions({ max: 1, time: 60000, maxUsers: 1 });
  const reaction = collected.first();
  const channel = member.guild.channels.cache.find(c => c.name === 'general') as TextChannel;
  if (collected.size === 0 || reaction.emoji.name !== '👍') {
    console.log(`${member.user.username} has not confirmed they read the rules.`);
    await channel.send(gigiSpeak(`${member.user.username} has not confirmed they read the rules.`));
    try {
      await member.kick();
    } catch (e) {
      console.log('Could not kick member', e);
    }
    return;
  }
  await member.send(gigiSpeak('thank you for confirming, you have been given the regular role.'));
  if (!channel) {
    return;
  }
  await channel.send(`${member} ${gigiSpeak('has passed the test, everyone act normal')}`);
  if (!member.roles.cache.has(regularRole.id)) {
    await member.roles.add([regularRole]);
  }
}
