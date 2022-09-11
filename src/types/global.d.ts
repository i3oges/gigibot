declare namespace NodeJS {
  interface ProcessEnv {
    BOT_TOKEN: string;
    CLIENT_ID: string;
    GUILD_ID: string;
    WELCOME_MEMBERS: string;
    COMMUNITY_FINDER_PAGE_ID: string;
    CHROMIUM_PATH: string;
    DB_HOST: string;
    DB_USER: string;
    DB_PASS: string;
  }
}
