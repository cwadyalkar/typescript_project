class Student {
  height;
  weight;
  protected power;

  constructor(height: number, weight: number, power: number) {
    this.height = height;
    this.weight = weight;
    this.power = power;
  }
  getmyheight = () => {};
}

class teacher extends Student {
  special;
  constructor(height: number, weight: number, power: number,special:boolean) {
    super(height, weight, power);
    this.special = special;
  }
}
const abhi = new Student(5.5, 58, 55);
const rakesh = new teacher(57,65,78,true)
console.log(rakesh.getmyheight)
console.log(abhi.height);
