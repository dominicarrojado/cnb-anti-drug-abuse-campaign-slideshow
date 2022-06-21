import '../styles/globals.css';
import type { AppProps } from 'next/app';
import SeoTags from '../components/seoTags';
import FontFaces from '../components/fontFaces';
import TagManager from '../components/tagManager';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SeoTags />
      <FontFaces />
      <TagManager />
      <Component {...pageProps} />
    </>
  );
}
