export default function add(inputString) {
    if(typeof inputString !== 'string') {
        // we will not support String objects as wells
        throw new Error('Unsupported data type, expected a string')
    }

    // either split by new line or ,
    const numbers = inputString.split(/\n|,/).map(i => Number(i))

    return numbers.reduce((sum, item) => {
        if(!isNaN(item)) {
            sum += item
        }
        return sum;
    }, 0)
}