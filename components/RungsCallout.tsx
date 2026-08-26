import { Callout } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

const UTM = 'utm_source=plcsimulator.online&utm_medium=referral&utm_campaign=successor';
const DOCS = 'https://rungs.dev/docs';

/**
 * Studio deep links.
 *
 * Every CTA that says "try it" should open a rung that is ALREADY BUILT for the topic the
 * reader is on. Arriving at an empty project means they have to build something before they
 * can evaluate, and simplicity is the one advantage this simulator still has.
 *
 * Fill each entry with a link that loads a prepared program. Anything left as STUDIO falls
 * back to the Studio home page.
 */
const STUDIO = 'https://studio.rungs.dev/';
const studioExample = {
  timer: STUDIO, // TODO: program with a TON already wired to an input
  counter: STUDIO, // TODO: program with a CTU + RES already wired
  coil: STUDIO, // TODO: program with OTE / OTL / OTU on one rung
  branch: STUDIO, // TODO: program with an OR branch
  move: STUDIO, // TODO: program with MOVE into a DINT tag
  contact: STUDIO, // TODO: program with XIC / XIO on one rung
};

/**
 * Copy rules, from the "Why aren't you switching to rungs.dev?" survey (130 responses):
 *
 *  - 35.9% had never heard of rungs.dev, and free-text answers included "i have never heard
 *    about this new software". So NEVER write "Rungs" or "Studio" as if the reader already
 *    knows the product. Every callout introduces it from zero, in that callout.
 *  - 43.1% picked "I'm not sure what's different or better about it" as their blocker — the
 *    single biggest one. So every callout makes ONE concrete, checkable claim. No page gets
 *    a callout that only announces a move.
 *  - 23.1% picked "I don't want to lose my existing projects", so where it's relevant, say
 *    that work can be saved to their own computer.
 *  - Skip product jargon the reader can't evaluate (file extensions, internal feature names).
 */
type Variant = {
  /** 'newer' = this page has a newer version · 'contrast' = capability claim · 'status' = calm successor notice · 'try' = task continuation · 'relay' = the thing this simulator can't do */
  angle: 'newer' | 'contrast' | 'status' | 'try' | 'relay';
  title: string;
  body: ReactNode;
  cta: string;
  href: string;
};

/** Always introduce the product. The reader has probably never heard of it. */
function RungsLink() {
  const { asPath } = useRouter();
  return (
    <a
      href={withUtm(STUDIO, `${slugFor(asPath)}_inline`)}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold underline underline-offset-2 hover:no-underline"
    >
      studio.rungs.dev
    </a>
  );
}
const RUNGS = <RungsLink />;
const successor = <>the simulator I work on now</>;

const VARIANTS: Record<string, Variant> = {
  // ---- Top doc pages by traffic: task continuation, copy written per instruction ----
  '/docs/ladder/timer': {
    angle: 'try',
    title: 'Want to try this for real?',
    body: (
      <>
        You&apos;re reading about timers. On {RUNGS} — {successor} — you can drop a <strong>TON</strong> into a live rung and watch the accumulator tick, one
        scan at a time.
      </>
    ),
    cta: 'Build a timer in Rungs Studio',
    href: studioExample.timer,
  },
  '/docs/ladder/counter': {
    angle: 'try',
    title: 'Want to try this for real?',
    body: (
      <>
        You&apos;re reading about counters. On {RUNGS} — {successor} — you can wire a <strong>CTU</strong> to a live input, watch the count climb, and reset it
        while the program runs.
      </>
    ),
    cta: 'Build a counter in Rungs Studio',
    href: studioExample.counter,
  },
  '/docs/ladder/coil': {
    angle: 'try',
    title: 'Want to try this for real?',
    body: (
      <>
        You&apos;re reading about coils. On {RUNGS} — {successor} — you can toggle an input and watch a coil drive a named tag, then step the scan to see
        exactly when it latches.
      </>
    ),
    cta: 'Try coils in Rungs Studio',
    href: studioExample.coil,
  },
  '/docs/ladder/branch': {
    angle: 'try',
    title: 'Want to try this for real?',
    body: (
      <>
        You&apos;re reading about branches. On {RUNGS} — {successor} — the power flow lights up as you toggle inputs, so you can watch an OR branch pass or
        block before you commit to the logic.
      </>
    ),
    cta: 'Try branches in Rungs Studio',
    href: studioExample.branch,
  },
  '/docs/ladder/move': {
    angle: 'try',
    title: 'Want to try this for real?',
    body: (
      <>
        You&apos;re reading about MOVE. On {RUNGS} — {successor} — you can point <strong>MOVE</strong> at a named number tag, run it, and chart the value as it
        changes over time.
      </>
    ),
    cta: 'Try MOVE in Rungs Studio',
    href: studioExample.move,
  },

  // ---- The differentiator this simulator structurally cannot match ----
  '/docs/ladder/contact': {
    angle: 'relay',
    title: 'Stuck on this instruction?',
    body: (
      <>
        {RUNGS} — {successor} — has a built-in assistant that reads your actual ladder and explains why a rung isn&apos;t doing what you expect. This simulator
        will never have that.
      </>
    ),
    cta: 'Ask the assistant in Rungs Studio',
    href: studioExample.contact,
  },

  // ---- Reference pages: hand the reader the maintained version of what they came for ----
  '/docs/ladder/compare': {
    angle: 'newer',
    title: 'This page has a newer version.',
    body: (
      <>
        These docs are no longer maintained. The compare instructions — EQ, NE, GT, GE, LT, LE — are documented and kept current on {RUNGS}, {successor}.
      </>
    ),
    cta: 'Read the updated Compare reference',
    href: `${DOCS}/ladder-logic/instructions/compare`,
  },
  '/docs/ladder/math': {
    angle: 'newer',
    title: 'This page has a newer version.',
    body: (
      <>
        These docs are no longer maintained. ADD, SUB, MUL, DIV, MOD and the rest are documented and kept current on {RUNGS}, {successor}.
      </>
    ),
    cta: 'Read the updated Math reference',
    href: `${DOCS}/ladder-logic/instructions/math`,
  },
  '/docs/ladder/diagram': {
    angle: 'newer',
    title: 'This page has a newer version.',
    body: (
      <>
        These docs are no longer maintained. The same introduction to Ladder Logic, rewritten and kept current, lives on {RUNGS}, {successor}.
      </>
    ),
    cta: 'Read the updated page',
    href: `${DOCS}/ladder-logic/what-is-ladder-logic`,
  },
  '/docs/structured-text': {
    angle: 'newer',
    title: 'Structured Text is not supported here.',
    body: (
      <>
        This simulator is Ladder-only, and is no longer developed. {RUNGS} — {successor} — runs Structured Text and Ladder side by side against the same tags.
      </>
    ),
    cta: 'Read the Structured Text docs',
    href: `${DOCS}/structured-text/what-is-structured-text`,
  },
  '/docs/tutorial': {
    angle: 'newer',
    title: 'This tutorial is out of date.',
    body: (
      <>
        It was recorded on an older build, and these docs are no longer maintained. The written docs for {RUNGS}, {successor}, are current.
      </>
    ),
    cta: 'Read the rungs.dev docs',
    href: DOCS,
  },

  // ---- Overview pages: lead with the claim, not the announcement ----
  '/docs/ladder': {
    angle: 'contrast',
    title: 'The simulator I work on now runs more of these.',
    body: (
      <>
        {RUNGS} is free in the browser like this one, and runs a wider ladder instruction set: timers <code>TON</code>, <code>TOF</code>, <code>RTO</code> · counters{' '}
        <code>CTU</code>, <code>CTD</code>, <code>RES</code> · latches <code>OTL</code>, <code>OTU</code> · one-shots <code>ONS</code>, <code>OSR</code>,{' '}
        <code>OSF</code> · compare <code>EQ</code>, <code>NE</code>, <code>GT</code>, <code>GE</code>, <code>LT</code>, <code>LE</code>, <code>LIMIT</code> ·
        math <code>ADD</code>, <code>SUB</code>, <code>MUL</code>, <code>DIV</code>, <code>MOD</code>, <code>ABS</code>, <code>SQRT</code>, <code>NEG</code> ·
        plus <code>MOVE</code>, <code>MVM</code>, <code>AND</code>, <code>OR</code>, <code>XOR</code>, <code>NOT</code>, <code>CLR</code>, <code>BTD</code>.
      </>
    ),
    cta: 'See the full instruction reference',
    href: `${DOCS}/ladder-logic/instructions`,
  },
  '/docs/iec61131-3': {
    angle: 'contrast',
    title: 'This simulator covers Ladder Logic only.',
    body: (
      <>
        {RUNGS} — {successor} — adds <strong>Structured Text</strong> (IF/THEN, CASE, FOR, WHILE) alongside ladder,
        against one shared set of named tags.
      </>
    ),
    cta: 'Write Structured Text in Rungs Studio',
    href: STUDIO,
  },
  '/docs': {
    angle: 'status',
    title: 'No longer maintained.',
    body: (
      <>
        Everything in these docs still works, but all the work goes into {RUNGS} — same idea, free in the browser, with a wider instruction set and both Ladder
        Logic and Structured Text editors. It also has an AI assistant that can explain PLCs for you.
      </>
    ),
    cta: 'Open Rungs Studio',
    href: STUDIO,
  },
  '/docs/sharing': {
    angle: 'contrast',
    title: 'Sharing without an account, and a copy you keep.',
    body: (
      <>
        {RUNGS} — {successor} — gives you a share link with no sign-in, and lets you save the whole program to your
        own computer so nothing is stranded on a server.
      </>
    ),
    cta: 'Share a program in Rungs Studio',
    href: STUDIO,
  },

  // ---- Site pages ----
  '/about': {
    angle: 'status',
    title: 'No longer in active development.',
    body: (
      <>
        This simulator stays free and online, but I am not adding to it any more. All the work goes into {RUNGS} — same idea, free in the browser, with a
        wider instruction set, Structured Text, and an AI assistant.
      </>
    ),
    cta: 'Open Rungs Studio',
    href: STUDIO,
  },
  '/contact': {
    angle: 'status',
    title: 'I am not fixing bugs here any more.',
    body: (
      <>
        This simulator stays free and online, but it is not getting new features or fixes. Bug reports and feature requests belong on {RUNGS}, {successor}.
      </>
    ),
    cta: 'Open Rungs Studio',
    href: STUDIO,
  },
};

const CALLOUT_TYPE = {
  newer: 'info',
  contrast: 'info',
  status: 'info',
  try: 'default',
  relay: 'default',
} as const;

function slugFor(asPath: string) {
  const path = asPath.split('?')[0].split('#')[0].replace(/\/$/, '') || '/';
  return path === '/' ? 'home' : path.slice(1).replace(/\//g, '_');
}

function withUtm(href: string, slug: string) {
  const [base, hash] = href.split('#');
  const sep = base.includes('?') ? '&' : '?';
  return `${base}${sep}${UTM}&utm_content=${slug}${hash ? `#${hash}` : ''}`;
}

export default function RungsCallout() {
  const { asPath } = useRouter();
  const path = asPath.split('?')[0].split('#')[0].replace(/\/$/, '') || '/';
  const variant = VARIANTS[path];
  if (!variant) return null;

  const slug = slugFor(asPath);

  return (
    <Callout type={CALLOUT_TYPE[variant.angle]}>
      <p className="font-semibold">{variant.title}</p>
      <p className="mt-1">{variant.body}</p>
      <p className="mt-2">
        <a
          href={withUtm(variant.href, slug)}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline underline-offset-2 hover:no-underline"
        >
          {variant.cta} →
        </a>
      </p>
    </Callout>
  );
}
