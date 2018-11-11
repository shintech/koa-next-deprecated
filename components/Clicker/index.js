const Clicker = ({ trees, increment = () => {}, decrement = () => {} }) => {
  // let value = (trees.value >= 0) ? 'positive': 'negative'

  let value = () => {
    if (trees.value < 0) { return 'negative' }
    if (trees.value === 0) { return 'zero' }
    if (trees.value > 0) { return 'positive' }
  }

  return (
    <div>
      <p>Number &#10144; <span className={value()}>{trees.value}</span></p>
      <button className='decrement' onClick={() => { decrement(1) }}>Decrement!</button>
      <button className='increment' onClick={() => { increment(1) }}>Increment!</button>

      <style jsx>{`
        p {
          color: violet;
          font-size: 6ch;
          margin: 0.75ch;
          white-space: nowrap;
        }

        .positive {
          color: palegreen;
        }
        
        .negative {
          color: lightcoral;
        }
        
        .zero {
          color: deepskyblue;
        }

        button {
          border-radius: 2ch;
          height: 10ch;
          width: 23ch;
          font-size: 2.5ch;
          margin: 0.25ch;
          border: 0.1ch solid white;
        }
  
        button.decrement {
          background-color: pink;
        }
  
        button.increment {
          background-color: mediumspringgreen;
        }
  
        button:hover {
          cursor: pointer;
          background-color: gold;
          color: midnightblue;
          border: 0.2ch solid white;
        }
  
        button:active {
          background-color: teal;
          color: white;
        }
      `}</style>
    </div>
  )
}
export default Clicker
