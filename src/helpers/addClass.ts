export const addClass = (className: string, tagName: string, classList: DOMTokenList, parentElement?: HTMLElement | null,): void => {
    if (tagName === 'LI') {
        classList.add(className)
    } else {
        parentElement?.classList.add(className);;
    }
}

export const showIfCorrect = (e: MouseEvent, correct?: Boolean | null): void => {
    if (!e.target) return;
    const { classList, tagName, parentElement } = e.target as HTMLLIElement;
    if (correct) {
        addClass('correct', tagName, classList, parentElement)
    } else {
        addClass('incorrect', tagName, classList, parentElement)
    }
}