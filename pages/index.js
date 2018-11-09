import { connect } from 'react-redux'
import { increment } from '../redux/actions/trees'

const Home = ({ title, trees, increment }) =>
  <div>
    <h1>{title}</h1>
    <p>Number -> {trees.value}</p>
    <button onClick={() => { increment(1) }}>Click Me!</button>

    <style jsx>{`
      h1 {
        font-family: 'Rouge Script', cursive;
        font-size: 45px;
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
