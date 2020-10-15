import * as React from 'react';
import { Box, Typography } from '@material-ui/core'
import { renderColor } from '../helpers/renderColor'

type ResultTypes = {
    numCorrect: number
}

export const Result = ({ numCorrect }: ResultTypes) => {
    return (
        <Box className="Result">
            <Typography variant="h3">Game Over!</Typography>
            <Typography variant="body1" style={{ color: renderColor(numCorrect) }}>You answered {numCorrect} correct</Typography>
        </Box>
    )
}