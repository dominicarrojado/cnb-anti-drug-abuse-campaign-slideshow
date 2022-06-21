import '../styles/globals.css';
import type { AppProps } from 'next/app';
import SeoTags from '../components/seoTags';
import FontFaces from '../components/fontFaces';
import TagManager from '../components/tagManager';
import Layout from '../components/layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SeoTags />
      <FontFaces />
      <TagManager />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
