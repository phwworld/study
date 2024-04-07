import { useState } from 'react';
import './App.css';
import Box from './component/Box';

function App() {
  const [counter, setCounter2] = useState(0);
  const increase = () => {
    setCounter2(counter + 1);
  }

  return (
    <div>
      <Box name="test" num={1} />
      <Box name="react" num={2} />
      <Box name="project" num={3} />
      <div>{counter}</div>
      <button onClick={increase}>클릭</button>
    </div>
  );
}

export default App;
