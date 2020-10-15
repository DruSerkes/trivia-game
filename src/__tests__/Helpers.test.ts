import { renderColor } from '../helpers/renderColor'
import { shuffle } from '../helpers/shuffle'


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
})