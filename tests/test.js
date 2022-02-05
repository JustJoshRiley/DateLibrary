const d = require('../src/index')

test('Year', () => {
    const myBirthday = new d.dateObj('1998', '10', '14')
    expect(myBirthday.year).toBe(1998)
})

test('Yr', () => {
    const myBirthday = new d.dateObj('1998', '10', '14')
    expect(myBirthday.yr).toBe(98)
})

test('Month', () => {
    const myBirthday = new d.dateObj('1998', '10', '14')
    expect(myBirthday.month).toBe('November')
})

test('Mon', () => {
    const myBirthday = new d.dateObj('1998', '10', '14')
    expect(myBirthday.mon).toBe('Nov')
})

test('Day', () => {
    const myBirthday = new d.dateObj('1998', '10', '14')
    expect(myBirthday.day).toBe('Saturday')
})

test('Dy', () => {
    const myBirthday = new d.dateObj('1998', '10', '14')
    expect(myBirthday.dy).toBe('Sat')
})

test('Hours', () => {
    const myBirthday = new d.dateObj('1998', '10', '14', 11)
    expect(myBirthday.hours).toBe(11)
})

test('Min', () => {
    const myBirthday = new d.dateObj('1998', '10', '14', 11, 58)
    expect(myBirthday.min).toBe(58)
})

test('formatArray', () => {
    const myBirthday = new d.dateObj('1998', '10', '14')
    expect(myBirthday.formatArray('Y m, d' )).toBe('1998 Nov, Sat')
})


test('when', () => {
    const myBirthday = new d.dateObj('1998', '10', '14')
    expect(myBirthday.when()).toBe('23 years ago')
})