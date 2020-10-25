import React from 'react';
import './App.css';
import { TriviaGame } from './components/TriviaGame';
import { Typography, Box } from '@material-ui/core'

/* TODO 
*/
function App() {
      return (
            <Box className="App">
                  <Typography gutterBottom variant="h1">Trivia!</Typography>
                  <TriviaGame />
            </Box>);
}

export default App;
