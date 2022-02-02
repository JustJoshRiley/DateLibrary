// Challenge 1
class D {
    constructor(...args) {
        this._date = new Date(...args)
    }
    get year() {
        return this._date.getFullYear()
    }
    get day() {
        return this._date.getDay()
    }
    get date() {
        return this._date.getDate()
    }
    get month() {
        return this._date.getMonth()
    }
    get hours() {
        return this._date.getHours()
    }
    get min() {
        return this._date.getMinutes()
    }
    // Challenge 2

}

const myBirthday = new D('1998', '10', '14')
const today = new D()
// console.log( myBirthday._date.getDay() )
// console.log( myBirthday._date.getFullYear() )
console.log( myBirthday.year)
console.log( myBirthday.day)
console.log( myBirthday.date)
console.log( myBirthday.month)
console.log( myBirthday.hours)
console.log( myBirthday.min)
