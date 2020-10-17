import * as React from 'react';
import { useState } from 'react';
import { Box, Button, TextField } from '@material-ui/core'

type StartProps = {
    startGame: (amount: string) => void
}
/*
1. Add state for amount ✅
2. Add a field for amount: easy, medium, hard, surprise me! ✅
3. check that state works as expected 
4. Update startGame to include amount from user choice 
5. check response 
*/
export const Start = ({ startGame }: StartProps) => {
    const [amount, setAmount] = useState<string>('10')

    const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>): void => setAmount(e.target.value)

    const handleSubmit = () => {
        // console.log(amount);
        startGame(amount)
    }
    return (
        <Box className="Start">
            <TextField label="Number of Questions" type="number" value={amount} onChange={handleChangeAmount} />
            <Button variant="contained" fullWidth color="primary" onClick={handleSubmit}>Start New Game</Button>
        </Box >
    )
}