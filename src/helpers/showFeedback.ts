const correctResponses = ['Correct!!', 'That\'s Right!!', 'You got it right!', 'Good job!', 'Well done!', 'Strong work there!!']
const incorrectResponses = ['Wrong', 'Not quite', 'That\'s not it', 'Sorry', 'Uh oh', 'Whoops']

export const showFeedback = (correct?: boolean | null) => {
    const feedback = document.querySelector('.Feedback');
    if (!feedback) return;

    if (correct) {
        const randIdx = Math.floor(Math.random() * correctResponses.length);
        const positiveResponse = correctResponses[randIdx];
        feedback.textContent = positiveResponse;
        feedback.classList.add('correct');
    } else {
        const randIdx = Math.floor(Math.random() * correctResponses.length);
        const negativeResponse = incorrectResponses[randIdx];
        feedback.textContent = negativeResponse;
        feedback.classList.add('incorrect');
    }

    feedback?.setAttribute('style', 'display: block');
};

export const hideFeedback = () => {
    const feedback = document.querySelector('.Feedback');
    if (!feedback) return;
    feedback?.setAttribute('style', 'display: hidden');
    feedback.textContent = '';
    feedback.classList.remove('correct', 'incorrect');
};