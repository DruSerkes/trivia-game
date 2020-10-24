import { renderColor } from '../helpers/renderColor'
import { shuffle } from '../helpers/shuffle'
import { addClassToAnswer, showIfCorrect, removeClassFromAnswer, removeFeedback, removeSelectedAndShowCorrect } from '../helpers/addAndRemoveClass'


describe('helpers tests', () => {

    test('shuffle', () => {
        let arrayToShuffle = ['hi', 'hello', 'testing', '123', 'leggo my eggo']
        expect(shuffle(arrayToShuffle)).not.toEqual(['hi', 'hello', 'testing', '123', 'leggo my eggo'])
    })

    test('renderColor', () => {
        expect(renderColor(2, 10)).toEqual('red');
        expect(renderColor(4, 10)).toEqual('orange');
        expect(renderColor(6, 10)).toEqual('yellow');
        expect(renderColor(8, 10)).toEqual('green');
        expect(renderColor(10, 10)).toEqual('blue')
    })

    test('addClassToAnswer', () => {
        const testElement = document.createElement('li');
        addClassToAnswer('correct', testElement.tagName, testElement.classList);
        expect(testElement.classList).toContain('correct');
    })

    test('removeClassFromAnswer', () => {
        const testElement = document.createElement('li');
        const testClass = 'incorrect'
        addClassToAnswer(testClass, testElement.tagName, testElement.classList);
        expect(testElement.classList).toContain(testClass);
        removeClassFromAnswer(testClass, testElement.tagName, testElement.classList);
        expect(testElement.classList).not.toContain(testClass);
    })

    test('showIfCorrect adds selected', () => {
        const testElement = document.createElement('li');
        testElement.addEventListener('click', (e) => showIfCorrect(e, true));
        testElement.click();
        expect(testElement.classList).toContain('selected');
    })

    test('showIfCorrect adds selected to incorrect', () => {
        const testElement = document.createElement('li');
        testElement.addEventListener('click', (e) => showIfCorrect(e, false));
        testElement.click();
        expect(testElement.classList).toContain('selected');
    })

    test('removeFeedback removes correct', () => {
        const testElement = document.createElement('li');
        testElement.classList.add('correct')
        expect(testElement.classList).toContain('correct');
        testElement.addEventListener('click', (e) => removeFeedback(e, true));
        testElement.click();
        expect(testElement.classList).not.toContain('selected');

    })

    test('removeFeedback removes incorrect', () => {
        const testElement = document.createElement('li');
        testElement.classList.add('incorrect')
        expect(testElement.classList).toContain('incorrect');
        testElement.removeEventListener('click', showIfCorrect);
        testElement.addEventListener('click', (e) => removeFeedback(e, false));
        testElement.click();
        expect(testElement.classList).not.toContain('selected');
    })

    test('removeSelectedAndShowCorrect removes selected and show-correct', () => {
        const testElement = document.createElement('p');
        testElement.classList.add('selected');
        testElement.classList.add('show-correct');
        testElement.classList.add('Answer');
        document.body.append(testElement)
        removeSelectedAndShowCorrect();
        expect(testElement.classList).not.toContain('selected');
        expect(testElement.classList).not.toContain('show-correct');
    })
})