import React from "react";
import "./App.css";
import { TriviaGame } from "./components/TriviaGame";
import { Typography, Box } from "@material-ui/core";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Box className="App">
      <Typography gutterBottom variant="h1">
        Let's Trivia!
      </Typography>
      <TriviaGame />
      <Footer />
    </Box>
  );
}

export default App;
