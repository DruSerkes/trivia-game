import React from 'react';
import './App.css';
import { TriviaGame } from './components/TriviaGame';
import { Typography, Box } from '@material-ui/core'


function App() {
      return (
            <Box className="App">
                  <Typography gutterBottom variant="h1">Let's Trivia!</Typography>
                  <TriviaGame />
            </Box>);
}

export default App;
