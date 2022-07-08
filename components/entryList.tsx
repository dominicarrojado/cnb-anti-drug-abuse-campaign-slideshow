import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { getRefValue, useStateRef } from '../lib/hooks';
import EntryItem from './entryItem';
import { Entry, FetchState } from '../lib/types';
import {
  SLIDESHOW_INTERVAL,
  SLIDESHOW_MAX_ENTRIES,
  SLIDESHOW_LOAD_MORE_THRESHOLD,
} from '../lib/constants';

type Props = {
  fetchState: FetchState;
  entries: Array<Entry>;
  getMoreEntries: () => void;
};

export default function EntryList({
  fetchState,
  entries,
  getMoreEntries,
}: Props) {
  const entriesLength = entries.length;
  const fetchStateRef = useRef(fetchState);
  const entriesLengthRef = useRef(entriesLength);
  const [maxOffsetY, setMaxOffetY] = useState(0);
  const [offsetY, setOffsetY, offsetYRef] = useStateRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const updateMaxOffsetY = () => {
    const containerEl = getRefValue(containerRef);

    if (containerEl) {
      setMaxOffetY(containerEl.scrollHeight - containerEl.offsetHeight);
    }
  };

  useEffect(() => {
    const windowOnResize = () => window.requestAnimationFrame(updateMaxOffsetY);

    windowOnResize();

    window.addEventListener('resize', windowOnResize);

    return () => window.removeEventListener('resize', windowOnResize);
  }, []);

  useEffect(() => {
    fetchStateRef.current = fetchState;
  }, [fetchState]);

  useEffect(() => {
    entriesLengthRef.current = entriesLength;

    updateMaxOffsetY();
  }, [entriesLength]);

  useEffect(() => {
    let interval = NaN;

    interval = window.setInterval(() => {
      if (maxOffsetY !== 0) {
        let newOffsetY = getRefValue(offsetYRef) + 1;

        if (
          entriesLength < SLIDESHOW_MAX_ENTRIES &&
          getRefValue(fetchStateRef) !== FetchState.LOADING &&
          newOffsetY >= Math.round(maxOffsetY * SLIDESHOW_LOAD_MORE_THRESHOLD)
        ) {
          getMoreEntries();
        } else if (newOffsetY >= maxOffsetY) {
          newOffsetY = 0;
        }

        setOffsetY(newOffsetY);
      } else {
        updateMaxOffsetY();
      }
    }, SLIDESHOW_INTERVAL);

    return () => window.clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxOffsetY]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-0 py-[10px] px-[10px] overflow-hidden"
    >
      <ul
        className={cn('flex flex-wrap', 'transition-transform')}
        style={{ transform: `translateY(-${offsetY}px)` }}
      >
        {entries.map((entry, idx) => (
          <EntryItem key={idx} entry={entry} />
        ))}
      </ul>
    </div>
  );
}
