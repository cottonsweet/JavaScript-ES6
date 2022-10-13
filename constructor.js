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
