import React from 'react';
import './App.css';
import { TriviaGame } from './components/TriviaGame';

/* TODO 
1. Refactor with MUI components 
2. Add custom styles where necessary 
3. Add next features 
*/
function App() {
      return (
            <div className="App">
                  <h1>Trivia Game!</h1>
                  <TriviaGame />
            </div>);
}

export default App;
