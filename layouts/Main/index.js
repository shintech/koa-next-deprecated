import Head from 'next/head'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'

const Main = ({ children, title = 'Hello World!' }) =>
  <div>
    <Head>
      <title>{ title } | HOME</title>
      <link rel='icon' type='image/png' href='/static/images/favicon.png' />
    </Head>

    <main>
      { children }
    </main>

    <footer>
      <img src='/static/images/react.svg' width='25px' height='25px' />
      <a href='#'>&#169;&nbsp;shintech.ninja</a>
    </footer>

    <style jsx>{`
      display: grid;
      grid-template-rows: [start row-1] 100% [row-2] 1fr [stop end];
      grid-template-columns: 100%;

      main {
        min-height: 95vh;
        grid-row: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      footer {
        min-height: 4vh;
        grid-row: 2;
        display: flex;
        border-radius: 10px;
        background: magenta;
        align-items: center;
      }

      footer a {
        margin-left: auto;
        color: yellow;
        text-decoration: none;
        padding: 0 2vh 1vh;
      }

      footer a {
        margin-right: 4px;
        margin-top: 1ch;
      }

      footer img {
        padding: 0.3vh 0 0 1vh;
      } 
    `}</style>
  </div>

Main.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  router: PropTypes.object.isRequired
}

export default withRouter(Main)
