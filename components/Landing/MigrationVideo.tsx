import React, { useState } from 'react';
import { VIDEO_ID } from './links';

const TITLE = 'PLC Simulator Online is moving to Rungs Studio';

/**
 * The video as its cover until someone presses play, and only then the YouTube player
 * (youtube-nocookie). The page loads nothing from YouTube for the people who do not watch.
 * The same pattern as the empty canvas in the simulator (plc-simulator, StudioVideo.tsx).
 */
export default function MigrationVideo() {
  const [playing, setPlaying] = useState(false);
  const frame = 'relative w-full aspect-video rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700';

  if (playing) {
    return (
      <div className={frame}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={TITLE}
        />
      </div>
    );
  }

  return (
    <button type="button" onClick={() => setPlaying(true)} aria-label={`Play video: ${TITLE}`} className={`${frame} group block cursor-pointer`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/migration/video-cover.jpg" alt="" width={1280} height={720} className="w-full h-full object-cover" />
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-20 h-14 rounded-2xl bg-neutral-800/90 group-hover:bg-red-600 group-focus-visible:bg-red-600 transition-colors">
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-white" fill="currentColor" aria-hidden="true">
          <path d="M8 5.5v13a.5.5 0 0 0 .77.42l10-6.5a.5.5 0 0 0 0-.84l-10-6.5A.5.5 0 0 0 8 5.5z" />
        </svg>
      </span>
      <span className="absolute right-3 bottom-3 px-1.5 py-0.5 rounded bg-black/80 text-white text-sm font-semibold">3:54</span>
    </button>
  );
}
