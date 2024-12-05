export default function add(inputString) {
    if(typeof inputString !== 'string') {
        // we will not support String objects as wells
        throw new Error('Unsupported data type, expected a string')
    }

    const number = Number(inputString)
    if(!isNaN(number)) {
        return number
    }

    return 0
}