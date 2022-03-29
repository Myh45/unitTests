const lengthOfArr = 40;
const numbers = Array.from({ length: lengthOfArr }, () => Math.floor(Math.random() * lengthOfArr));

const findAmountOfOddNumbers = (numbers) => numbers.filter(number => number > 0 && number % 2 !== 0).length;

const sumOfNumbersSquares = (n) => {

    let resultsArr = [];

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n; j++) {

            for (let k = 0; k < n; k++) {

                if (n === (i ** 2 + j ** 2 + k ** 2)) {

                    resultsArr.push(i, j, k);

                }
            }
        }
    }

    // for (let i = 0; i < resultsArr.length; i++) {
    //     resultsObject[i] = { 'x, y, z': resultsArr.splice(0, 3) };
    // }


    return resultsArr;

}

module.exports = { findAmountOfOddNumbers, sumOfNumbersSquares }