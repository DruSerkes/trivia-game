import React from 'react';
import './App.css';
import { TriviaGame } from './components/TriviaGame';
import { Typography, Box } from '@material-ui/core'

/* TODO 
1. Refactor with MUI components 
2. Add custom styles where necessary 
3. Add next features 
*/
function App() {
      return (
            <Box className="App">
                  <Typography variant="h1">Trivia Game!</Typography>
                  <TriviaGame />
            </Box>);
}

export default App;
