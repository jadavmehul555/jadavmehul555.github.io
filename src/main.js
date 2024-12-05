export default function add(inputString) {

    const number = Number(inputString)
    if(!isNaN(number)) {
        return number
    }

    return 0
}