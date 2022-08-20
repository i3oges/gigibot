import { Client, MessageEmbed, TextChannel } from 'discord.js';
import puppeteer from 'puppeteer';
import { Sequelize, STRING } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './bot-data.sqlite',
});

sequelize.define('recruitments', {
  name: {
    type: STRING,
  },
  commentText: {
    type: STRING,
  },
  sentOn: {
    type: STRING,
  },
});
sequelize.sync();

export async function checkRecruitmentPage(client: Client) {
  await sequelize.authenticate();
  const recruitmentPage = `https://na.finalfantasyxiv.com/lodestone/community_finder/${process.env.COMMUNITY_FINDER_PAGE_ID}/`;
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: process.platform === 'win32' ? undefined : '/usr/bin/chromium-browser',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto(recruitmentPage);
  const comments = await page.$$('.cf-comment__window .cf-comment__wrapper');

  for (const comment of comments) {
    const name = await (await comment.$('.cf-comment__name:not(.member)'))?.evaluate(el => el.childNodes[0].textContent.trim());
    const commentText = await (await comment.$('.cf-comment__body'))?.evaluate(el => el.textContent.trim());
    const sentOn = await (await comment.$('.cf-comment__data span'))?.evaluate(el => el.textContent.trim());
    if (name && commentText && sentOn) {
      const found = await sequelize.models.recruitments.findOne({ where: { name, commentText, sentOn } });
      if (!found) {
        const channel = client.channels.cache.find((channel: any) => channel.name === 'recruitment-updates') as TextChannel;
        await channel.send({ embeds: [new MessageEmbed().setTitle(name).setDescription(commentText).setURL(recruitmentPage).setFooter(sentOn)] });
        console.log('sent recruitment page comment at', new Date().toString(), 'to', channel.name);
        await sequelize.models.recruitments.create({ name, commentText, sentOn });
      } else {
        console.log('already logged comment');
      }
    }
  }
}
