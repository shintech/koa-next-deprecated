import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <link rel='icon' type='image/png' href='/static/images/favicon.png' />

          <style jsx global>{`
            @import 'https://fonts.googleapis.com/css?family=Esteban|Farsan|Rouge+Script';
            @import 'https://use.fontawesome.com/releases/v5.2.0/css/all.css';

            body {
              background-color: darkslategray;
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
