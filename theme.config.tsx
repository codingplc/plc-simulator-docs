import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const currentYear = new Date().getFullYear();

const config: DocsThemeConfig = {
  logo: <span>PLC Simulator Online</span>,
  project: {
    link: 'https://github.com/Dagryl/plc-simulator-docs',
  },
  chat: {
    link: 'https://discord.gg/puVcdjEp4G',
  },
  docsRepositoryBase: 'https://github.com/Dagryl/plc-simulator-docs/blob/master/',
  footer: {
    text: '© CodingPLC ' + currentYear,
  },
  sidebar: {
    toggleButton: true,
  },
};

export default config;
