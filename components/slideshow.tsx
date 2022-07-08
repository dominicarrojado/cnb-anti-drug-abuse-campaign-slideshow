import React, { useEffect } from 'react';
import cn from 'classnames';
import { useGetEntries } from '../lib/custom-hooks';
import EntryList from './entryList';
import LoaderBubbles from './loaderBubbles';
import Error from './error';
import Logo from './logo';
import Banner from './banner';
import { FetchState } from '../lib/types';

export default function Slideshow() {
  const [fetchState, entries, hasEntries, getMoreEntries] = useGetEntries();

  useEffect(() => {
    getMoreEntries();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className={cn(
          'hidden flex-1 h-full min-h-full justify-center items-center border-[3px] border-white bg-black bg-opacity-80',
          'lg:flex lg:portrait:hidden'
        )}
      >
        {hasEntries && (
          <EntryList
            fetchState={fetchState}
            entries={entries}
            getMoreEntries={getMoreEntries}
          />
        )}
        {!hasEntries && <LoaderBubbles />}
        {fetchState === FetchState.ERROR && (
          <Error retryOnClick={getMoreEntries} />
        )}
      </div>
      <div
        className={cn(
          'hidden flex-shrink-0 h-full flex-col',
          'lg:flex lg:portrait:hidden'
        )}
      >
        <div className="h-[36%]">
          <Logo />
        </div>
        <div className="h-[64%]">
          <Banner />
        </div>
      </div>
    </>
  );
}
