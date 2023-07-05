import { useState } from 'react';
import React from 'react';


const App = () => {
  const buttonTextItems = ['bears, beets, battlestar galactica',
"What's Forrest Gump's password? 1Forrest1",
'Where do programmers like to hang out?  The Foo Bar'];
const initialGameState = {
  victory: false,
  startTime: null,
  endTime: null
}
      const [snippet, setSnippet] = useState('');
      const [userText, setUserText] = useState('');
      const [gameState, setGameState] = useState(initialGameState);

  const updateUserText = event => {
    setUserText(event.target.value);

    if(event.target.value === snippet) {
      setGameState({
        gameState,
        victory: true,
        endTime: new Date().getTime() - gameState.startTime
      });
    }
  };
  const chooseSnippet = index => {
    setSnippet(buttonTextItems[index]);
    setGameState({ gameState, startTime: new Date().getTime() });
  };

  return (
    <div>
 <h2>TypeRace</h2>
 <hr />
 <h3>Snippet</h3>
 <div>{snippet}</div>
 <h4>{gameState.victory ? `Done! Woot! Time: ${gameState.endTime}ms` : null}</h4>
    <input value={userText} onChange={updateUserText} />
    <hr />
    {buttonTextItems.map((textItem, index) => <button onClick={() => chooseSnippet(index)}>{textItem}</button>)}
    </div>
  );
};

export default App;