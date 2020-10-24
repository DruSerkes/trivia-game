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
        addClassToAnswer('correct', tagName, classList, parentElement);
    } else {
        // call a fn that looks for answer with class 'Correct-Answer' and adds class 'show-correct'
        addClassToAnswer('incorrect', tagName, classList, parentElement);
    }
}
// TODO: change logic entirely 
// keep correct and incorrect styles, but have this fn ^ add class: 'selected'
//  --- update tests   
//  --- update fn removeClassFromAnswers 
//  --- update tests 
// change correct and incorrect styles to only work if also has the class: 'selected' 
// add styles for show-correct
// have removeClassFromAnswers remove 'show-correct'
// export const 

export const removeFeedback = (e: MouseEvent, correct?: Boolean | null): void => {
    if (!e.target) return;
    const { classList, tagName, parentElement } = e.target as HTMLLIElement;
    if (correct) {
        removeClassFromAnswer('correct', tagName, classList, parentElement);
    } else {
        removeClassFromAnswer('incorrect', tagName, classList, parentElement);
    }
}

export const removeClassFromAnswers = () => {
    const answerElements = document.querySelectorAll('.Answer');
    Array.from(answerElements).forEach((el) => {
        el.classList.remove('correct');
        el.classList.remove('incorrect');
    });
}