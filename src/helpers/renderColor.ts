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