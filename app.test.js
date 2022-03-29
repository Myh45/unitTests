const { test, expect } = require('@jest/globals')
const { findAmountOfOddNumbers, sumOfNumbersSquares } = require('./app.js')

describe('find amount of odd numbers function: ', () => {
    let numbers = [];
    beforeEach(() => {
        numbers = [1, 3, 4, 5, 6, 15, 19, 22, 34, 37];
    })

    test('should be defined ', () => {
        expect(findAmountOfOddNumbers([])).toBeDefined();
    })

    test('should return amount of odd numbers', () => {
        expect(findAmountOfOddNumbers(numbers)).toBe(6);
    })

    test('should work only with natural numbers', () => {
        const arrr = [1, 2, 3, -3, 'hi', false, null]
        expect(findAmountOfOddNumbers(arrr)).toBe(2);
    })

})




describe('find sum of nubmers squares function: ', () => {

    test('sum of square x, y, z combinations should be equal to n', () => {
        const n = 264;
        const combinationOfThreeEl = sumOfNumbersSquares(n).slice(0, 3);

        expect(combinationOfThreeEl.reduce((current, item) => current + item ** 2, 0)).toEqual(n);

    })

    test('should have length more than 3', () => {

        expect(sumOfNumbersSquares(264).length).toBeGreaterThan(3);

    })
})

