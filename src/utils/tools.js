// 字符串翻转
export const reverseString = str => {
    return str
        .split('')
        .reverse()
        .join('')
}

// 日期格式化
/**
 * @description: 日期格式化
 * @param: date  时间对象
 */
export const monent = (date = new Date()) => {
    class Monent {
        constructor (date) {
            this.date = date
        }

        returZero (num) {
            return num * 1 < 10 ? `0${num}` : num
        }

        before (day) {
            let dateTime = this.date.getTime()
            dateTime -= day * 60 * 60 * 24 * 1000
            this.date = new Date(dateTime)
            return this
        }

        format (str) {
            const year = this.date.getFullYear()
            const month = this.date.getMonth() + 1
            const day = this.date.getDate()
            const hour = this.date.getHours()
            const minute = this.date.getMinutes()
            const secouds = this.date.getSeconds()
            // 时间格式
            const obj = {
                YYYY: year,
                MM: month,
                DD: day,
                hh: hour,
                mm: minute,
                ss: secouds
            }
            for (const key in obj) {
                const reg = new RegExp(key)
                const val = this.returZero(obj[key])
                str = str.replace(reg, () => {
                    return val
                })
            }
            return str
        }
    }
    return new Monent(date)
}
// 小数点保留后两位
export const numberAddFixed = num => {
    if (num) {
        const str = num.toString()
        if (str.includes('.')) {
            const arr = str.split('.')
            let lastNum = arr[1]
            lastNum = lastNum.length === 1 ? `${lastNum}0` : lastNum
            return `${arr[0]}.${lastNum}`
        } else {
            return `${num}.00`
        }
    } else {
        return '0.00'
    }
}
// 删除数组里面的元素
export const deleArrEl = (arr, key, el) => {
    const index = arr.findIndex((item) => {
        return item[key] === el
    })
    arr.splice(index, 1)
    return arr
}
