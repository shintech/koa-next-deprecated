const Clicker = ({ trees, increment = () => {}, decrement = () => {} }) =>
  <div>
    <p>Number &#10144; <span className='value'>{trees.value}</span></p>
    <button className='decrement' onClick={() => { decrement(1) }}>Decrement!</button>
    <button className='increment' onClick={() => { increment(1) }}>Increment!</button>

    <style jsx>{`
      p {
        color: purple;
        font-size: 6ch;
        margin: 0.75ch;
      }

      .value {
        color: magenta;
      }

      button {
        border-radius: 2ch;
        height: 10ch;
        width: 25ch;
        font-size: 2.5ch;
        margin: 0.25ch;
        border: 0.1ch solid black;
      }

      button.decrement {
        background-color: pink;
      }

      button.increment {
        background-color: lightgreen;
      }

      button:hover {
        cursor: pointer;
        background-color: cyan;
        color: teal;
      }

      button:active {
        background-color: teal;
        color: white;
      }
    `}</style>
  </div>

export default Clicker
