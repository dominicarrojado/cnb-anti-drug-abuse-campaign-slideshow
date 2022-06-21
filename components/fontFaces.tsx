import Head from 'next/head';
import React, { Fragment } from 'react';
import { getAssetUrl } from '../lib/assets';
import { FONTS } from '../lib/constants';

export default function FontFaces() {
  return (
    <Head>
      {FONTS.map((font, idx) => (
        <Fragment key={idx}>
          <link
            rel="preload"
            href={getAssetUrl(`fonts/${font}.woff2`)}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={getAssetUrl(`fonts/${font}.woff2`)}
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
        </Fragment>
      ))}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'DIN';
              font-style: normal;
              font-weight: 400;
              src: url('${getAssetUrl(
                'fonts/DIN-Regular.woff2'
              )}') format('woff2'),
                url('${getAssetUrl('fonts/DIN-Regular.woff')}') format('woff');
              font-display: swap;
            }
          
            @font-face {
              font-family: 'DIN';
              font-style: italic;
              font-weight: 400;
              src: url('${getAssetUrl(
                'fonts/DIN-Italic.woff2'
              )}') format('woff2'),
                url('${getAssetUrl('fonts/DIN-Italic.woff')}') format('woff');
              font-display: swap;
            }
          `,
        }}
      />
    </Head>
  );
}
