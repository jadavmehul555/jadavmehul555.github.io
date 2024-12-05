export default function add(input) {
    let inputString = input;

    if(typeof inputString !== 'string') {
        // we will not support String objects as wells
        throw new Error('Unsupported data type, expected a string')
    }

    let delimiterPattern = /[\n,]/; // Defaults to comma and newline

    if (inputString.startsWith("//")) {
        const endOfDelimiter = inputString.indexOf("\n");
        const customDelimiter = inputString.slice(2, endOfDelimiter);
        delimiterPattern = new RegExp(`[${customDelimiter}]`);
        inputString = inputString.slice(endOfDelimiter + 1); // Remove the custom delimiter line
      }
    

    // either split by new line or ,
    const numbers = inputString.split(delimiterPattern).map(i => Number(i))

    // filter for negative numbers
    const negativeList = numbers.filter(i => !isNaN(i) && i < 0)
    if(negativeList.length > 0) {
        throw new Error(`negatives not allowed, contains ${negativeList.join(',')}`)
    }

    return numbers.reduce((sum, item) => {
        // Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2
        if(item > 1000) {
            return sum;
        }

        if(!isNaN(item)) {
            sum += item
        }
        return sum;
    }, 0)
}