import sum from './main'

describe('Sum', () => {
    test('returns 0 for undefined or empty string', () => {
        expect(sum('')).toBe(0)
    })

    test('single number in input string, returns a number', () => {
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
})