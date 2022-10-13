// constructor  오브젝트를 생성하는 기계

const studentList = {
  name: "kim",
  age: 15,
};

// constructor 함수정의는 맨앞에 대문자로 작성하는 관습이 있음.

function Student(name, age) {
  // Student(컨스트럭트,생성자) 를만들때 this 라는 키워드가 필요로 함
  // this : Student(컨스트럭트,생성자)에서 새로 생성되는 오브젝트(인스턴스)
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(`안녕하세요 저는 ${this.name} | ${this.age} 입니다.`);
  };
}

// 상속을 구현할 수 있는 또 하나의 문법 prototype(프로토타입) > 프로토타입은 유전자.
// 프로토타입에 값을 추가하면 모든 자식들이 물려받기가 가능함.

// 오브젝트에 있는값을 먼저 확인하고 없으면 prototype을 검사함
// 프로토타입은 함수에만 몰래 생성됨.
Student.prototype.gender = "man";

// 내 부모 유전자(부모의 프로토타입)를 검사하고 싶으면 자식.__proto__ = 부모

const stu1 = new Student("코더", 25);
const stu2 = new Student("철수", 25);
stu1.sayHi();
stu2.sayHi();

function Shopitem(shirts, price) {
  this.name = shirts;
  this.price = price;
  this.vat = function () {
    console.log(`선택하신 ${this.name} 의 상품 부가세는 ${this.price * 0.1} 원 입니다.`);
  };
  console.log(`고르신 상품은 ${this.name} 상품이며 가격은 ${this.price} 원 입니다.`);
}
const product1 = new Shopitem("shirts", 50000);
product1.vat();
const product2 = new Shopitem("pants", 60000);
product2.vat();

const parents = {
  name: "God",
};

const child = {};
child.__proto__ = parents;

function StudentGroup(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(`안녕 내이름은 ${this.name} 이고 나이는 ${this.age} 살이야 !`);
  };
}

StudentGroup.prototype.sayHi = () => {
  console.log(`안녕 내이름은 ${this.name} 이고 나이는 ${this.age} 살이야 !`);
  // 프로토타입에 함수를 정의하였으나 제대로 출력이 되지 않는 이유는 여기서의 this는 arrow functiond 으로 인하여 바깥 window를 불러옴
};

console.log(StudentGroup.prototype);

const student1 = new StudentGroup("Kim", 20);
student1.sayHi();
const student2 = new StudentGroup("Park", 21);
student2.sayHi();
const student3 = new StudentGroup("Lee", 22);
student3.sayHi();

function Parent() {
  this.name = "Kim";
}

var a = new Parent();

a.__proto__.name = "Park";
console.log(a.name);

let arrayGood = [1, 2, 3, 4, 5, 3, 3, 3, 3, 1, 2, 65, 6, 1, 5, 12, 3, 4, 1, 2];

Array.prototype.remove3 = function () {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === 3) {
      this.splice(i, 1);
      i--;
    }
  }
};

arrayGood.remove3();
console.log(arrayGood);

Array.prototype.remove = function (number) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === number) {
      this.splice(i, 1);
      i--;
    }
  }
};

arrayGood.remove(65);
console.log(arrayGood);

// ES5 상속기능 > Object.create(프로토타입으로 만들 object) 를 넣어서 실행시키면 오브젝트가 남음

const es5Parent = {
  name: "Kim",
  age: 50,
};

const es5Child = Object.create(es5Parent);
es5Child.name = "son";
es5Child.age = 20;

const es5ChildOfChild = Object.create(es5Child);
es5ChildOfChild.name = "hyun";
es5ChildOfChild.age = 25;

// ES6 상속기능 > class를 사용함 (콘스트럭터를 만드는 신문법 !)

class es6Parent {
  constructor() {
    this.name = "kim";
    this.age = 20;
    // this.sayHi = function () {
    //   console.log("hello");
    // };
  }
  // 콘스트럭터 밖에 함수를 적을경우 자식 오브젝트에 추가가 안됨. 부모 프로토타입에 추가됨
  sayHi() {
    console.log("hello");
  }
}

const es6Child = new es6Parent();

// 아래 둘다 똑같으나 getPrototypeOf 코드가 더 직관성이 있음 둘중 하나 쓰면 됨

es6Child.__proto__;
Object.getPrototypeOf(es6Child);
