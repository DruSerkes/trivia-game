import * as React from 'react';
import { useState } from 'react';
import { Box, Button, TextField, FormControl, RadioGroup, FormControlLabel, Radio, FormLabel } from '@material-ui/core'

type StartProps = {
    startGame: (amount: string, difficulty: string) => void
}
/*
1. Add state for difficulty ✅
2. Add a field for difficulty: easy, medium, hard, surprise me! ✅
3. check that state works as expected 
4. Update startGame to include difficulty from user choice 
5. check response 
*/
export const Start = ({ startGame }: StartProps) => {
    const [amount, setAmount] = useState<string>('10');
    const [difficulty, setDifficulty] = useState<string>('');

    const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>): void => setAmount(e.target.value)
    const handleChangeDifficulty = (e: React.ChangeEvent<HTMLInputElement>): void => setDifficulty(e.target.value)
    const handleSubmit = () => {
        // console.log(amount, difficulty);
        startGame(amount, difficulty)
    }
    return (
        <Box className="Start">
            <TextField label="Number of Questions" type="number" value={amount} onChange={handleChangeAmount} />
            <FormControl component="fieldset">
                <FormLabel component="legend">Difficulty</FormLabel>
                <RadioGroup aria-label="difficulty" name="difficulty" value={difficulty} onChange={handleChangeDifficulty}>
                    <FormControlLabel value="" control={<Radio />} label="Surprise Me!" />
                    <FormControlLabel value="easy" control={<Radio />} label="Easy" />
                    <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                    <FormControlLabel value="hard" control={<Radio />} label="Hard" />
                </RadioGroup>
            </FormControl>
            <Button variant="contained" fullWidth color="primary" onClick={handleSubmit}>Start New Game</Button>
        </Box >
    )
}