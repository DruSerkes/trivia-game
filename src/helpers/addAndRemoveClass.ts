export const addClassToAnswer = (className: string, tagName: string, classList: DOMTokenList, parentElement?: HTMLElement | null,): void => {
    if (tagName === 'LI') {
        classList.add(className);
    } else {
        parentElement?.classList.add(className);;
    }
}

export const removeClassFromAnswer = (className: string, tagName: string, classList: DOMTokenList, parentElement?: HTMLElement | null): void => {
    if (tagName === 'LI') {
        classList.remove(className);
    } else {
        parentElement?.classList.add(className);
    }
}

export const showIfCorrect = (e: MouseEvent, correct?: Boolean | null): void => {
    if (!e.target) return;
    const { classList, tagName, parentElement } = e.target as HTMLLIElement;
    if (correct) {
        addClassToAnswer('selected', tagName, classList, parentElement);
    } else {
        addShowCorrect();
        addClassToAnswer('selected', tagName, classList, parentElement);
    }
}

export const addShowCorrect = () => {
    const correctAnswer = document.querySelector('.Correct-Answer');
    correctAnswer?.classList.add('show-correct');
}

export const removeFeedback = (e: MouseEvent, correct?: Boolean | null): void => {
    if (!e.target) return;
    const { classList, tagName, parentElement } = e.target as HTMLLIElement;
    if (correct) {
        removeClassFromAnswer('correct', tagName, classList, parentElement);
    } else {
        removeClassFromAnswer('incorrect', tagName, classList, parentElement);
    }
}

export const removeSelectedAndShowCorrect = () => {
    const answerElements = document.querySelectorAll('.Answer');
    Array.from(answerElements).forEach((el) => {
        el.classList.remove('selected');
        el.classList.remove('show-correct');
    });
}