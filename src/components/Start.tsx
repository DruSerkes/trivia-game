import * as React from 'react';
import { Box, Button } from '@material-ui/core'

type StartProps = {
    startGame: () => void
}

export const Start = ({ startGame }: StartProps) => {

    return (
        <Box className="Start">
            <Button variant="contained" fullWidth color="primary" onClick={startGame}>Start New Game</Button>
        </Box >
    )
}