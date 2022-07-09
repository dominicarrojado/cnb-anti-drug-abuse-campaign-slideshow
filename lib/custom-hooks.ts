import { useState } from 'react';
import { getFakerJs } from './imports';
import {
  getRandomAnimationDelay,
  getRandomBgColor,
  getRandomBgDirection,
  getRandomStickerImageUrl,
} from './entries';
import { createImageWithSticker } from './canvas';
import { Entry, FetchState } from './types';
import { ENTRIES_PER_PAGE, ENTRY_IMAGE_SIZE } from './constants';

export function useGetEntries() {
  const [entries, setEntries] = useState([] as Array<Entry>);
  const [hasEntries, setHasEntries] = useState(false);
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const getMoreEntries = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const faker = await getFakerJs();
      const promises: Array<Promise<Entry>> = [];
      const extraEntriesCount = entries.length % ENTRIES_PER_PAGE;
      const newEntriesCount = ENTRIES_PER_PAGE - extraEntriesCount; // to keep gallery grid 9x9

      for (let i = 0; i < newEntriesCount; i++) {
        promises.push(
          (async () => {
            const mainImageUrl = faker.image.imageUrl(
              ENTRY_IMAGE_SIZE,
              ENTRY_IMAGE_SIZE,
              'people',
              true,
              true
            );
            const stickerImageUrl = getRandomStickerImageUrl();

            return {
              imageUrl: await createImageWithSticker(
                mainImageUrl,
                stickerImageUrl
              ),
              name: faker.name.findName(),
              message: faker.lorem.sentence(),
              bgColor: getRandomBgColor(),
              bgDirection: getRandomBgDirection(),
              animationDelay: getRandomAnimationDelay(),
            };
          })()
        );
      }

      const newEntries = await Promise.all(promises);

      setEntries((currentEntries) => [...currentEntries, ...newEntries]);
      setHasEntries(true);

      setFetchState(FetchState.SUCCESS);
    } catch (err) {
      console.error(err);
      setFetchState(FetchState.ERROR);
    }
  };

  return [fetchState, entries, hasEntries, getMoreEntries] as const;
}
