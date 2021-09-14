import { config } from 'dotenv';

config();

export const environment = {
  botToken: process.env.BOT_TOKEN ?? '',
  clientID: process.env.CLIENT_ID ?? '',
  guildID: process.env.GUILD_ID ?? '',
  serpApiKey: process.env.SERP_API_KEY ?? '',
};
