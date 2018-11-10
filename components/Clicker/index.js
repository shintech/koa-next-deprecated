const Clicker = ({ trees, onClick = () => {} }) =>
  <div>
    <p>Number &#10144; <span className='value'>{trees.value}</span></p>
    <button onClick={() => { onClick(1) }}>Click Me!</button>

    <style jsx>{`
      p {
        color: purple;
        font-size: 3ch;
      }

      .value {
        color: magenta;
      }
    `}</style>
  </div>

export default Clicker
