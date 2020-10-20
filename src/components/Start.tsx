import * as React from 'react';
import { useState } from 'react';
import { Box, Button, TextField, FormControl, RadioGroup, FormControlLabel, Radio, FormLabel } from '@material-ui/core'

type StartProps = {
    startGame: (amount: string, difficulty: string, type: string) => void
}

export const Start = ({ startGame }: StartProps) => {
    const [amount, setAmount] = useState<string>('10');
    const [difficulty, setDifficulty] = useState<string>('');
    const [type, setType] = useState<string>('multiple');

    const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>): void => setAmount(e.target.value);
    const handleChangeDifficulty = (e: React.ChangeEvent<HTMLInputElement>): void => setDifficulty(e.target.value);
    const handleChangeType = (e: React.ChangeEvent<HTMLInputElement>): void => setType(e.target.value);
    const handleSubmit = () => startGame(amount, difficulty, type);

    return (
        <Box className="Start">
            <TextField label="Number of Questions" type="number" value={amount} onChange={handleChangeAmount} />
            <FormControl component="fieldset">
                <FormLabel component="legend">Difficulty</FormLabel>
                <RadioGroup row aria-label="difficulty" name="difficulty" value={difficulty} onChange={handleChangeDifficulty}>
                    <FormControlLabel value="easy" control={<Radio />} label="Easy" labelPlacement="end" />
                    <FormControlLabel value="medium" control={<Radio />} label="Medium" labelPlacement="end" />
                    <FormControlLabel value="hard" control={<Radio />} label="Hard" labelPlacement="end" />
                    <FormControlLabel value="" control={<Radio />} label="Surprise Me!" labelPlacement="end" />
                </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
                <FormLabel component="legend">Type</FormLabel>
                <RadioGroup row aria-label="type" name="type" value={type} onChange={handleChangeType}>
                    <FormControlLabel value="multiple" control={<Radio />} label="Multiple Choice" labelPlacement="end" />
                    <FormControlLabel value="boolean" control={<Radio />} label="True/False" labelPlacement="end" />
                </RadioGroup>
            </FormControl>
            <Button variant="contained" fullWidth color="primary" onClick={handleSubmit}>Start New Game</Button>
        </Box >
    )
}