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
})