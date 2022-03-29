// const lengthOfArr = 40;
// const numbers = Array.from({ length: lengthOfArr }, () => Math.floor(Math.random() * lengthOfArr));

const findAmountOfOddNumbers = (numbers) => numbers.filter(number => number > 0 && number % 2 !== 0).length;

const sumOfNumbersSquares = (n) => {

    let resultsArr = [];

    let iterationCount = 0;

    const max = Math.floor(Math.sqrt(n));

    for (let x = 0; x < max; x++) {

        for (let y = 0; y < max; y++) {

            for (let z = 0; z < max; z++) {

                if (n === (x ** 2 + y ** 2 + z ** 2)) {

                    resultsArr.push(x, y, z);

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