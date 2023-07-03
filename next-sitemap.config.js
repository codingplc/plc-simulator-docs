/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://plcsimulator.online',
  generateRobotsTxt: true,
  // ...other options
};
