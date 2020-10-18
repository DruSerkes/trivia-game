export const addClass = (className: string, tagName: string, classList: DOMTokenList, parentElement?: HTMLElement | null,): void => {
    if (tagName === 'LI') {
        classList.add(className)
    } else {
        parentElement?.classList.add(className);;
    }
}