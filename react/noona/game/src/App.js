import { useState } from 'react'
import './App.css';
import Box from './component/Box'

const choice = {
  rock: {
    name: 'Rock',
    img: 'https://previews.123rf.com/images/8dda/8dda1605/8dda160500010/56822337-%ED%9D%B0-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EB%B0%94%EC%9C%84-%EB%8F%8C.jpg'
  },
  scissors: {
    name: 'Scissors',
    img: 'https://cdn.imweb.me/thumbnail/20200514/7fc8b1411fa8d.png'
  },
  paper: {
    name: 'Paper',
    img: 'https://m.media-amazon.com/images/I/61LpGWsUaLL.jpg'
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [comSelect, setComSelect] = useState(null);
  const [result, setResult] = useState('');

  const paly = (userChoise) => {
    setUserSelect(choice[userChoise]);
    let comChoice = randomChoice();
    setComSelect(comChoice);
    setResult(judgement(choice[userChoise], comChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let finalItem = itemArray[randomItem];
    return choice[finalItem];
  }

  const judgement = (user, com) => {
    if (user.name == com.name) {
      return 'tie';
    } else if (user.name == 'Rock') {
      return com.name == 'Scissors' ? 'win' : 'lose';
    } else if (user.name == 'Scissors') {
      return com.name == 'Paper' ? 'win' : 'lose';
    } else if (user.name == 'Paper') {
      return com.name == 'Scissors' ? 'win' : 'lose';
    }
  }

  return (
    <div className='wrap'>
      <div className='boxArea'>
        <Box title="player" item={userSelect} result={result} />
        <Box title="computer" item={comSelect} result={result} />
      </div>
      <div className='btnArea'>
        <button onClick={() => paly('scissors')}>가위</button>
        <button onClick={() => paly('rock')}>바위</button>
        <button onClick={() => paly('paper')}>보</button>
      </div>
    </div>
  );
}

export default App;
