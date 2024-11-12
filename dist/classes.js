"use strict";
class Student {
    constructor(height, weight, power) {
        this.getmyheight = () => { };
        this.height = height;
        this.weight = weight;
        this.power = power;
    }
}
class teacher extends Student {
    constructor(height, weight, power, special) {
        super(height, weight, power);
        this.special = special;
    }
}
const abhi = new Student(5.5, 58, 54);
const rakesh = new teacher(57, 65, 78, true);
console.log(rakesh.getmyheight);
console.log(abhi.height);
