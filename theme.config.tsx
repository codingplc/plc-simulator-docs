import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

const currentYear = new Date().getFullYear();

const config: DocsThemeConfig = {
  logo: <span>PLC Simulator Online</span>,
  project: {
    link: 'https://github.com/dagryl/plc-simulator-docs',
  },
  chat: {
    link: 'https://discord.gg/puVcdjEp4G',
  },
  docsRepositoryBase: 'https://github.com/dagryl/plc-simulator-docs/blob/master/',
  footer: {
    text: '© CodingPLC ' + currentYear,
  },
  sidebar: {
    toggleButton: true,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        property="og:title"
        content="PLC Simulator Online Documentation - Learn & Master PLC Programming"
      />
      <meta
        property="og:description"
        content="Explore our comprehensive PLC Simulator Online Documentation for insightful guides on ladder logic creation, simulation, and sharing. Perfect your PLC programming skills and join our growing community of professionals and enthusiasts."
      />
    </>
  ),
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – PLC Documentation',
      };
    }
  },
};

export default config;
