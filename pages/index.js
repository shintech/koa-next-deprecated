import { connect } from 'react-redux'
import actions from '../redux/actions/trees'
import api from '../api/trees'
import Clicker from '../components/Clicker'

const Home = ({ title, trees, increment, decrement }) =>
  <div>
    <h1>{title}</h1>

    <Clicker trees={trees} increment={increment} decrement={decrement} />

    <style jsx>{`
      h1 {
        font-family: 'Rouge Script', cursive;
        font-size: 16ch;
        color: orange;
        text-shadow: 0.08ch 0.08ch red;
        margin: 2.25ch 0 0 0;
      }
    `}</style>
  </div>

Home.getInitialProps = async ({ store }) => {
  const title = 'Hello World!'

  try {
    let json = await api.fetchTrees()

    store.dispatch(actions.fetchValue(json.value))
  } catch (err) {
    console.error(err.message)
  }

  return { title }
}

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return {
    increment: (value) => {
      dispatch(actions.increment(value))
    },
    decrement: (value) => {
      dispatch(actions.decrement(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
