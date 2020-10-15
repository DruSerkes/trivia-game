import * as React from 'react';
import { Box, Typography } from '@material-ui/core'

type ResultTypes = {
    numCorrect: number
}

export const Result = ({ numCorrect }: ResultTypes) => {
    return (
        <Box className="Result">
            <Typography variant="h3">Game Over!</Typography>
            <Typography variant="body1">You answered {numCorrect} correct</Typography>
        </Box>
    )
}