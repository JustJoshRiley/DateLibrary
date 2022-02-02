// Challenge 1
class D {
    constructor(...args) {
        this._date = new Date(...args)
    }
    // Challenge 2

}

const myBirthday = new D('1998', '10', '14')
const today = new D()
// console.log(myBirthday)
// console.log(today)
console.log( myBirthday._date.getDay() )