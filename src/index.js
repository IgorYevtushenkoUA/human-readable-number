/**
 * take first digit in number
 * @param number
 * @returns {number}
 */
const getFirstDigit = (number) => {
    return (parseInt(number.toString().charAt(0)))
}
/**
 * delete first digit in number : 785 -> 85
 * @param n
 * @returns {number}
 */
const deleteFistDigit = (n) => {
    return parseInt(n.toString().slice(1))
}

const getHumanNumberLess20 = (number) => {
    switch (number) {
        case 10:
            return 'ten'
        case 11 :
            return 'eleven '
        case 12:
            return 'twelve '
        case 13:
            return 'thirteen '
        case 14:
            return 'fourteen '
        case 15:
            return 'fifteen '
        case 16:
            return 'sixteen '
        case 17:
            return 'seventeen '
        case 18:
            return 'eighteen '
        case 19:
            return 'nineteen '
    }
}

const getHumanNumber = (n, measure = 0) => {
    switch (n) {
        case 0 :
            return ''
        case 1:
            if (measure === 100)
                return 'one hundred '
            else if (measure === 20)
                return ''
            else
                return 'one'
        case 2:
            if (measure === 100)
                return 'two hundred '
            else if (measure === 20)
                return 'twenty '
            else
                return 'two'
        case 3:
            if (measure === 100)
                return 'three hundred '
            else if (measure === 20)
                return 'thirty '
            else
                return 'three'
        case 4:
            if (measure === 100)
                return 'four hundred '
            else if (measure === 20)
                return 'forty '
            else
                return 'four'
        case 5:
            if (measure === 100)
                return 'five hundred '
            else if (measure === 20)
                return 'fifty '
            else
                return 'five'
        case 6:
            if (measure === 100)
                return 'six hundred '
            else if (measure === 20)
                return 'sixty '
            else
                return 'six'
        case 7:
            if (measure === 100)
                return 'seven hundred '
            else if (measure === 20)
                return 'seventy '
            else
                return 'seven'
        case 8:
            if (measure === 100)
                return 'eight hundred '
            else if (measure === 20)
                return 'eighty '
            else
                return 'eight'
        case 9:
            if (measure === 100)
                return 'nine hundred '
            else if (measure === 20)
                return 'ninety '
            else
                return 'nine'
    }
}
/**
 * transform to human number if > 0
 * @param number
 * @returns {string|*}
 */
const transformToHumanNumber = (number) => {
    while (number >= 0) {

        if (number > 99) {
            return (getHumanNumber(getFirstDigit(number), 100)) + transformToHumanNumber(deleteFistDigit(number))
        } else if (number > 19)
            return (getHumanNumber(getFirstDigit(number), 20)) + transformToHumanNumber(deleteFistDigit(number))
        else if (number > 9)
            return (getHumanNumberLess20(number))
        else
            return getHumanNumber(getFirstDigit(number), 1)
    }
}

module.exports = function toReadable(number) {
    if ( number === 0 ) return 'zero'
    else return `${transformToHumanNumber(number).trim()}`
}

// console.log(toReadable(10))
