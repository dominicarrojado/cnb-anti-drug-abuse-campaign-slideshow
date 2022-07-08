import { getAssetUrl } from './assets';

export const SITE_NAME = 'Dominic Arrojado';
export const PROJECT_TITLE = 'CNB Anti-Drug Abuse Campaign Slideshow Singapore';
export const MAIN_AUTHOR = 'Dominic Arrojado';
export const MAIN_TITLE = `${PROJECT_TITLE} | ${SITE_NAME}`;
export const MAIN_DESC =
  'Make your pledge today and get a chance to win $100 worth of vouchers in our bi-monthly draw!';
export const MAIN_ORIGIN = 'https://dominicarrojado.com';
export const MAIN_PATH = '/cnb-anti-drug-abuse-campaign-slideshow/';
export const MAIN_URL = `${MAIN_ORIGIN}${MAIN_PATH}`;
export const META_IMAGE = `${MAIN_URL}images/screenshot.png`;
export const META_IMAGE_WIDTH = 1200;
export const META_IMAGE_HEIGHT = 648;
export const META_IMAGE_ALT = 'Secure a #DrugFreeSG | Make your pledge today!';
export const META_IMAGE_TYPE = 'image/png';

export const APP_URL = `${MAIN_ORIGIN}/cnb-anti-drug-abuse-campaign-app/`;

export const ENTRIES_PER_PAGE = 9;
export const ENTRY_IMAGE_SIZE = 345;

export const IMAGE_GENERATED_TYPE = 'image/png';

export const FONTS = ['DIN-Regular', 'DIN-Italic'];

export const STICKERS = [
  getAssetUrl('images/sticker-1-secure-a-drug-free-sg.png'),
  getAssetUrl('images/sticker-2-secure-a-drug-free-sg.png'),
  getAssetUrl('images/sticker-3-secure-a-drug-free-sg.png'),
  getAssetUrl('images/sticker-4-secure-a-drug-free-sg.png'),
  getAssetUrl('images/sticker-5-secure-a-drug-free-sg.png'),
  getAssetUrl('images/sticker-6-secure-a-drug-free-sg.png'),
  getAssetUrl('images/sticker-7-ribbon-secure-a-drug-free-sg.png'),
  getAssetUrl('images/sticker-8-certified-drug-free.png'),
];
export const STICKERS_LENGTH = STICKERS.length;

export const SLIDESHOW_INTERVAL = 40;
export const SLIDESHOW_MAX_ENTRIES = ENTRIES_PER_PAGE * 10;
export const SLIDESHOW_LOAD_MORE_THRESHOLD = 0.8;
