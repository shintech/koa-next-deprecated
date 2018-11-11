import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <style jsx global>{`
            @import 'https://fonts.googleapis.com/css?family=Esteban|Farsan|Rouge+Script';

            body {
              background-color: darkslategray;
              min-height: 100vh;
              margin: 0;
            }

            html {
              height: 100%
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
