import {
  ENTRY_ANIM_DELAY_MAX_SECONDS,
  ENTRY_BG_COLORS,
  ENTRY_BG_COLORS_LENGTH,
  ENTRY_BG_DIRECTIONS,
  ENTRY_BG_DIRECTIONS_LENGTH,
  STICKERS,
  STICKERS_LENGTH,
} from './constants';

export function getRandomStickerImageUrl() {
  const randomIdx = Math.floor(Math.random() * STICKERS_LENGTH);

  return STICKERS[randomIdx];
}

export function getRandomBgColor() {
  const randomIdx = Math.floor(Math.random() * ENTRY_BG_COLORS_LENGTH);

  return ENTRY_BG_COLORS[randomIdx];
}

export function getRandomBgDirection() {
  const randomIdx = Math.floor(Math.random() * ENTRY_BG_DIRECTIONS_LENGTH);

  return ENTRY_BG_DIRECTIONS[randomIdx];
}

export function getRandomAnimationDelay() {
  return Math.floor(Math.random() * (ENTRY_ANIM_DELAY_MAX_SECONDS + 1));
}
