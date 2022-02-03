const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const dy = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

class dateObj {
    constructor(...args) {
        this._date = new Date(...args)
    }
    // Year
    get year() {
        return this._date.getFullYear()
    }
    get yr() {
        // return parseInt(this._date.getFullYear().toString().slice(2))
        return this.year % 100
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
    
    formatArray = (mask) => {
        const fobj = {
            'Y': this.year,
            'y': this.yr,
            'M': this.month,
            'm': this.mon,
            'D': this.day,
            'd': this.dy
        }
        if(!mask) {
            return `${this.day} ${this.mon}, ${this.year}`
        }
        const newArr = []
        const maskArr = mask.split('')
        for(let i = 0; i<maskArr.length; i+=1) {
            if (fobj[maskArr[i]]) {
                newArr.push(fobj[maskArr[i]])
            } else {
                newArr.push(maskArr[i])
            }
        }
        return newArr.join('')
    }

    when = () => {
        const now = new Date()
        if(this._date > now) {
            const dif = this._date - now
            const years = parseInt((dif / 1000 / 60 / 60 / 24 / 365).toString())
            return `${years} years from now`
        } else {
            const dif = now - this._date
            const years = parseInt((dif / 1000 / 60 / 60 / 24 / 365).toString().slice(0,3))
            return `${years} years ago`
        }
    }

}

const myBirthday = new dateObj('3998', '10', '14')
// console.log( myBirthday._date.getDay() )
// console.log( myBirthday._date.getFullYear() )
// console.log( myBirthday.year)
// console.log( myBirthday.yr)
// console.log( myBirthday.date)
// console.log( myBirthday.month)
// console.log( myBirthday.mon)
// console.log( myBirthday.day)
// console.log( myBirthday.dy)
// console.log( myBirthday.hours)
// console.log( myBirthday.min)
// console.log(myBirthday.formatArray('Y m, d' ))
console.log(myBirthday.when())
