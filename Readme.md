# Javascript Date Library

### Badges
![npm bundle size](https://img.shields.io/bundlephobia/min/@justjoshriley/datelib?style=for-the-badge)

![npm (scoped)](https://img.shields.io/npm/v/@justjoshriley/datelib?style=for-the-badge)

![GitHub issues](https://img.shields.io/github/issues/justjoshriley/DateLibrary?style=for-the-badge)

![Packagist License](https://img.shields.io/packagist/l/justjoshriley/DateLibrary?style=flat-square)

### Installation instructions:
 Download the npm package:
 npm i @justjoshriley/datelib

## Initialize a new DateObj:

1) const date = new dateObj() --> 
Creates a new (current) date

2) const date = new dateObj('2022', '01', '04', '6', '13') --> Creates a new date for February 4th, 2022

3) const date = new dateObj(0) --> 
Creates new date at epochs origin

---------------------------------------------------------------

## Calling methods
1) Initialize a new dateObj ( const date = new dateObj() )
    a) date.year --> gets full year
    b) date.yr --> gets shortened year
    c) date.month --> gets full month
    d) date.mon --> gets shortened month
    e) date.day --> gets full day
    f) date.dy --> gets shortened day
    g) date.hours --> gets hour of day ( is 0 unless specified in date object)
    h) date.min --> gets minutes of day ( is 0 unless specified in date object)
    i) date.formatArray --> formats array of your chosen format
    j) date.when --> tells how long ago, or ahead date object is compared to current time.