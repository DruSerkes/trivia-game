import { renderColor } from '../helpers/renderColor'
import { shuffle } from '../helpers/shuffle'
import { addClass, showIfCorrect } from '../helpers/addClass'


describe('helpers tests', () => {

    test('shuffle', () => {
        let arrayToShuffle = ['hi', 'hello', 'testing', '123', 'leggo my eggo']
        expect(shuffle(arrayToShuffle)).not.toEqual(['hi', 'hello', 'testing', '123', 'leggo my eggo'])
    })

    test('renderColor', () => {
        expect(renderColor(2)).toEqual('red');
        expect(renderColor(4)).toEqual('orange');
        expect(renderColor(6)).toEqual('yellow');
        expect(renderColor(8)).toEqual('green');
        expect(renderColor(10)).toEqual('blue')
    })

    test('addClass', () => {
        const testElement = document.createElement('li');
        addClass('correct', testElement.tagName, testElement.classList);
        expect(testElement.classList).toContain('correct');
    })

    test('showIfCorrect adds correct', () => {
        const testElement = document.createElement('li');
        testElement.addEventListener('click', (e) => showIfCorrect(e, true));
        testElement.click();
        expect(testElement.classList).toContain('correct');
    })

    test('showIfCorrect adds incorrect', () => {
        const testElement = document.createElement('li');
        testElement.addEventListener('click', (e) => showIfCorrect(e, false));
        testElement.click();
        expect(testElement.classList).toContain('incorrect');
    })
})