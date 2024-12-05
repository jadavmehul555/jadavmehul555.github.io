import sum from './main'

describe('Sum', () => {
    test('returns 0 for undefined or empty string', () => {
        expect(sum()).toBe(0)
        expect(sum('')).toBe(0)
    })

    test('single number in input string, returns a number', () => {
        expect(sum("1")).toBe(1);

        // test 0 as it is falsy value
        expect(sum('0')).toBe(0);
    })
})