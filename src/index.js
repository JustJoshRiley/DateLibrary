const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const dy = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

class dateObject {
    constructor(...args) {
        this._date = new Date(...args)
    }
    // Year
    get year() {
        return this._date.getFullYear()
    }
    get yr() {
        return parseInt(this._date.getFullYear().toString().slice(2))
    }

    // Month
    get month() {
        return months[this._date.getMonth()]
    }
    get mon() {
        return mon[this._date.getMonth()]
    }

    // Day
    get day() {
        return days[this._date.getDay()]
    }
    get dy() {
        return dy[this._date.getDay()]
    }



    get date() {
        return this._date.getDate()
    }


    get hours() {
        return this._date.getHours()
    }
    get min() {
        return this._date.getMinutes()
    }
    get secs() {
        return this._date.getSeconds()
    }
    // Challenge 2

}

const myBirthday = new dateObject('1998', '10', '14')
// console.log( myBirthday._date.getDay() )
// console.log( myBirthday._date.getFullYear() )
console.log( myBirthday.year)
console.log( myBirthday.yr)
// console.log( myBirthday.date)
console.log( myBirthday.month)
console.log( myBirthday.mon)
console.log( myBirthday.day)
console.log( myBirthday.dy)
// console.log( myBirthday.hours)
// console.log( myBirthday.min)
