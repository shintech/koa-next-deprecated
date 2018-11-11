const Title = ({ title }) => 
  <div>
    <h1>{ title }</h1>

    <style jsx>{`
      h1 {
        font-family: 'Rouge Script', cursive;
        font-size: 16ch;
        color: orange;
        text-shadow: 0.08ch 0.08ch red;
        margin: 0;
      }
    `}</style>
  </div>

export default Title
