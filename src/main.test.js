import sum from './main'

describe('Sum', () => {
    test('for undefined or empty string', () => {
        expect(sum('')).toBe(0)
    })

    test('when single number in input string, returns a number', () => {
        expect(sum("1")).toBe(1);

        // test 0 as it is falsy value
        expect(sum('0')).toBe(0);
    })

    test('throws error when input is not a string', () => {
        const message = 'Unsupported data type, expected a string'
        expect(() => sum()).toThrow(message)
        expect(() => sum({})).toThrow(message);
        expect(() => sum(false)).toThrow(message)
    })

    test('returns sum of numbers when input string contains multiple numbers', () => {
        expect(sum('1,2,3')).toBe(6)
    })

    
    test('returns sum of numbers when input string contains new line', () => {
        expect(sum('1\n2,3')).toBe(6)
    })
    test('when input string contains has custom delimiter', () => {
        expect(sum('//;\n1;2')).toBe(3)

        // extra - supports any length for custom delimiter
        expect(sum('//[***]\n1***2***3')).toBe(0)
    })

    test('throws an error when numbers are negative', () => {
        expect(() => sum('-1,-2,-3')).toThrow(
            'negatives not allowed, contains -1,-2,-3'
        )
    })

    test('ignores numbers greater than 1000', () => {
        expect(sum('1001,2,3000')).toBe(2)
    })

})