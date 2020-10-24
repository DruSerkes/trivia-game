
// TODO: fix this to take numQuestions and divide by it 
// --- should fix color rendering for different number of questions other than 10
export const renderColor = (numCorrect: number, numAnswered: number) => {
    if (numCorrect / numAnswered < .3) {
        return 'red';
    } else if (numCorrect / numAnswered <= .5) {
        return 'orange';
    } else if (numCorrect / numAnswered < .7) {
        return 'yellow';
    }
    else if (numCorrect / numAnswered < 1) {
        return 'green';
    } else {
        return 'blue';
    }
}