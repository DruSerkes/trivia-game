import React from 'react';
import './App.css';
import { TriviaGame } from './components/TriviaGame';
import { Typography, Box } from '@material-ui/core'

/* TODO 
1. Add user can decide type (set type='boolean' in API call based on user input)
2. Add feedback text for correct / incorrect 
3. Refactor to show which was correct if incorrect was chosen... (give it a 1px green border)
*/
function App() {
      return (
            <Box className="App">
                  <Typography gutterBottom variant="h1">Trivia Game!</Typography>
                  <TriviaGame />
            </Box>);
}

export default App;
