import { connect } from 'react-redux'
import { increment } from '../redux/actions/trees'
import Clicker from '../components/Clicker'

const Home = ({ title, trees, increment }) =>
  <div>
    <h1>{title}</h1>

    <Clicker trees={trees} onClick={increment} />

    <style jsx>{`
      h1 {
        font-family: 'Rouge Script', cursive;
        font-size: 10ch;
        color: salmon;
      }
    `}</style>
  </div>

Home.getInitialProps = () => {
  const title = 'Hello World!'
  return { title }
}

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return {
    increment: (value) => {
      dispatch(increment(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
