
// TODO: fix this to take numQuestions and divide by it 
// --- should fix color rendering for different number of questions other than 10
export const renderColor = (numCorrect: number) => {
    if (numCorrect < 3) {
        return 'red';
    } else if (numCorrect <= 5) {
        return 'orange';
    } else if (numCorrect < 7) {
        return 'yellow';
    }
    else if (numCorrect < 10) {
        return 'green';
    } else {
        return 'blue';
    }
}