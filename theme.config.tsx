import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

const currentYear = new Date().getFullYear();

const config: DocsThemeConfig = {
  primaryHue: 200,
  logo: (
    <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        fill="#1D7AD7"
        d="m384,224.85v-96.85h-64v256h64v-95.15h128v95.15c0,70.69-57.31,128-128,128H128C57.31,512,0,454.69,0,384v-96h128v96h64V128h-64v96H0v-96C0,57.31,57.31,0,128,0h256c70.69,0,128,57.31,128,128v96.85h-128Z"
      />
    </svg>
  ),
  project: {
    link: 'https://github.com/dagryl/plc-simulator-docs',
  },
  chat: {
    link: 'https://discord.gg/puVcdjEp4G',
  },
  search: {
    component: undefined,
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
      <meta
        name="description"
        content="Explore our comprehensive PLC Simulator Online Documentation for insightful guides on ladder logic creation, simulation, and sharing. Perfect your PLC programming skills and join our growing community of professionals and enthusiasts."
      />

      <meta property="og:url" content="https://plcsimulator.online/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="PLC Simulator Online - Learn & Master PLC Programming" />
      <meta
        property="og:description"
        content="Explore our comprehensive PLC Simulator Online Documentation for insightful guides on ladder logic creation, simulation, and sharing. Perfect your PLC programming skills and join our growing community of professionals and enthusiasts."
      />
      <meta property="og:image" content="https://plcsimulator.online/images/og-image.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="plcsimulator.online" />
      <meta property="twitter:url" content="https://plcsimulator.online/" />
      <meta name="twitter:title" content="PLC Simulator Online Documentation - Learn & Master PLC Programming" />
      <meta
        name="twitter:description"
        content="Explore our comprehensive PLC Simulator Online Documentation for insightful guides on ladder logic creation, simulation, and sharing. Perfect your PLC programming skills and join our growing community of professionals and enthusiasts."
      />
      <meta name="twitter:image" content="https://plcsimulator.online/images/og-image.jpg" />
    </>
  ),
  navbar: {
    extraContent: (
      <a
        href="https://app.plcsimulator.online/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-white bg-primary-800 hover:bg-primary-900 font-medium rounded-lg text-l px-4 py-2 text-center "
      >
        Run Simulator
      </a>
    ),
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    const titleTemplate = asPath === '/' ? 'PLC Simulator Online & Ladder Logic Documentation' : '%s - Learn Ladder Logic';
    return {
      titleTemplate,
    };
  },
};

export default config;
