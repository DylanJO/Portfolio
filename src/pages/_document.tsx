import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='scroll-smooth'>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=optional" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
