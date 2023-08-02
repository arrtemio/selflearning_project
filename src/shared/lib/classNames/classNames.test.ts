// Почему-то проходит только если вызывать через терминал, либо менять путь на ./classNames
import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('test with single class', () => {
        expect(classNames('class')).toBe('class');
    });

    test('with additional classes in array', () => {
        expect(classNames('class', {}, ['mb10', 'p15']))
            .toBe('class mb10 p15');
    });

    test('test with mods', () => {
        expect(classNames('class', { red: true, primary: true }, ['p10', 'mb15']))
            .toBe('class p10 mb15 red primary');
    });

    test('test with mods false', () => {
        expect(classNames('class', { red: true, primary: false }, ['p10', 'mb15']))
            .toBe('class p10 mb15 red');
    });

    test('test with mods undefined', () => {
        expect(classNames('class', { red: true, primary: undefined }, ['p10', 'mb15']))
            .toBe('class p10 mb15 red');
    });
});
