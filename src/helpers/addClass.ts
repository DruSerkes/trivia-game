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
        addClassToAnswer('correct', tagName, classList, parentElement)
    } else {
        addClassToAnswer('incorrect', tagName, classList, parentElement)
    }
}

// TODO export const removeFeedback