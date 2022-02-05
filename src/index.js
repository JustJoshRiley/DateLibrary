const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const dy = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

class dateObj {
    constructor(...args) {
        this._date = new Date(...args)
    }
    // Year
    /** 
     * get year returns full year of the date obj
    * @param {} input none
    * @returns {number} the full year of the dateobj
    */
    get year() {
        return this._date.getFullYear()
    }
    /** 
     * get yr returns shortned year of the date obj
    * @param {} input none
    * @returns {number} the short year (last two digits) of the dateobj
    */
    get yr() {
        // return parseInt(this._date.getFullYear().toString().slice(2))
        return this.year % 100
    }

    // Month
    /** 
     * get month returns the month(string) of the dateobj
    * @param {} input none
    * @returns {string} the month of the dateobj
    */
    get month() {
        return months[this._date.getMonth()]
    }
    /** 
     * get mon returns the month(shortened string) of the dateobj
    * @param {} input none
    * @returns {string} the short month (first three letters) of the dateobj
    */
    get mon() {
        return mon[this._date.getMonth()]
    }

    // Day
    /** 
     * get day returns the day(string) of the dateobj
    * @param {} input none
    * @returns {string} the day of the week of the dateobj
    */
    get day() {
        return days[this._date.getDay()]
    }
    /** 
     * get dy returns the day(shortened string) of the dateobj
    * @param {} input none
    * @returns {string} the short day (first three letters) of the week of the dateobj
    */
    get dy() {
        return dy[this._date.getDay()]
    }

    /** 
     * get hours returns the hour of the dateobj
    * @param {} input none
    * @returns {string} the hour of the dateobj occurence
    */
    get hours() {
        return this._date.getHours()
    }
    /** 
     * get min returns the minutes of the dateobj
    * @param {} input none
    * @returns {string} the minutes of the dateobj occurence
    */
    get min() {
        return this._date.getMinutes()
    }
    /** 
     * get secs returns the seconds of the dateobj
    * @param {} input none
    * @returns {string} the seconds of the dateobj occurence
    */
    get secs() {
        return this._date.getSeconds()
    }
    
    /** 
     * function formatArray returns a formatted date of how you want the date to be formatted
    * @param {string} input string
    * @returns {string} the format of the date determined by the input
    */
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

    /** 
     * function when returns when a date occured compared to the current time(new dateobj)
    * @param {} input none
    * @returns {string} how long before or after the current date the dateObj occured
    */
    when = () => {
        const now = new Date()
        if(this._date > now) {
            const dif = this._date - now
            const years = Math.ceil(dif / 1000 / 60 / 60 / 24 / 365)
            if(years > 1) {
                return `${years} years from now`
            } else if (this._date.getFullYear() === now.getFullYear()) {
                const months = (this._date.getMonth() - now.getMonth())
                if (months >= 1) {
                    return `${months} months from now`
                } else {
                    const days = Math.ceil((dif / 1000 / 60 / 60 / 24))
                    console.log(days)
                    if (days < 1) {
                        const seconds = parseInt((dif / 1000))
                        return `congrats, its basically today`
                    } else {
                        return `${days} days from now`
                    }
                }
            }
            
        } else {
            const dif = now - this._date
            const years = Math.floor(dif / 1000 / 60 / 60 / 24 / 365)
            if(years > 1) {
                return `${years} years ago`
            } else if (this._date.getFullYear() === now.getFullYear()) {
                const months = (this._date.getMonth() - now.getMonth())
                if (months >= 1) {
                    return `${months} months ago`
                } else {
                    const days = Math.ceil((dif / 1000 / 60 / 60 / 24))
                    console.log(days)
                    if (days < 1) {
                        const seconds = parseInt((dif / 1000))
                        return `congrats, its basically today`
                    } else {
                        return `${days} days ago`
                    }
                }
            }
        }
    }
}

// const myBirthday = new dateObj('1998', '10', '14', 11, 58)
// console.log( myBirthday._date.getDay() )
// console.log( myBirthday._date.getFullYear() )
// console.log( myBirthday.year)
// console.log( myBirthday.yr)
// console.log( myBirthday.month)
// console.log( myBirthday.mon)
// console.log( myBirthday.day)
// console.log( myBirthday.dy)
// console.log( myBirthday.hours)
// console.log( myBirthday.min)
// console.log(myBirthday.formatArray('Y m, d' ))
// console.log(myBirthday.when())

module.exports.dateObj = dateObj;