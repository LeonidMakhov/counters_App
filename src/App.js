import {useState} from "react";

function App() {
  const [counter, setCounter] = useState(0);
  // const plus = () => {
  //     setCounter(counter + 1)
  //   }
  // const minus = () => {
  //     setCounter(counter - 1)
  //   }
  const change = (sign) => {
        //sign === '+' ? setCounter(counter + 1) : setCounter(counter - 1)
    setCounter(counter + sign);
  }

  return (
    <div>
      {/*<button onClick={plus}>+ Plus</button>*/}
      {/*  {counter}*/}
      {/*<button onClick={minus}>Minus -</button>*/}

      {/*<button onClick={() => change ('+')}>+ Plus</button>*/}
      {/*  {counter}*/}
      {/*<button onClick={() => change ('-')}>Minus -</button>*/}

      <button onClick={() => change (1)}>+ Plus</button>
        {counter}
      <button onClick={() => change (-1)}>Minus -</button>




    </div>
  );
}

export default App;
