import {useState} from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const plus = () => {
      setCounter(counter + 1)
    }
  const minus = () => {
      setCounter(counter - 1)
    }

  return (
    <div>
      <button onClick={plus}>+ Plus</button>
        {counter}
      <button onClick={minus}>Minus -</button>
    </div>
  );
}

export default App;
