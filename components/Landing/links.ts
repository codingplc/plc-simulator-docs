// The same source, medium and campaign as every other link from PLC Simulator Online to Rungs,
// so they roll up together in the Rungs PostHog project. `content` names the place on this
// page; the `landing_` prefix keeps it apart from the page's older links (`hero_secondary`,
// `rungs_section_cta`), so before and after can be compared.
const UTM = 'utm_source=plcsimulator.online&utm_medium=referral&utm_campaign=successor';

export const studioLink = (content: string) => `https://studio.rungs.dev/?${UTM}&utm_content=${content}`;

export const rungsLink = (path: string, content: string) => `https://rungs.dev${path}?${UTM}&utm_content=${content}`;

export const SIMULATOR = 'https://app.plcsimulator.online/';

export const VIDEO_ID = 'UTNUnhqCoho';

export const primaryButton =
  'inline-flex items-center justify-center text-white bg-primary-800 hover:bg-primary-900 focus:ring-4 font-medium rounded-lg text-xl px-5 py-2.5 text-center';

export const secondaryButton =
  'inline-flex items-center justify-center text-primary-800 dark:text-primary-300 bg-transparent border-2 border-primary-800 dark:border-primary-700 hover:bg-primary-50 dark:hover:bg-primary-900/30 focus:ring-4 font-medium rounded-lg text-xl px-5 py-2.5 text-center';

export const sectionHeading = 'mb-4 text-3xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white';

export const sectionLead = 'mb-10 mx-auto max-w-3xl font-light text-center lg:text-xl text-gray-600 dark:text-gray-400';

/** PLC Simulator Online's last day. The countdown and every mention of the date read it from here. */
export const CLOSING_DAY = { year: 2027, month: 6, day: 30 };
export const CLOSING_DAY_TEXT = '30 June 2027';
