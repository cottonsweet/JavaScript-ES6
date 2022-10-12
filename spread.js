// spread operator 무언가의 내용물을 빼고 싶을때 사용됨

// 1. array에 붙이면 대괄호를 제거해줌.
const array = ["hello", "world"];
console.log(...array);

// 2.문자에 붙이면 텍스트 한글짜식 펼쳐줌.
const text = "hello";
// 문자도 array처럼 인덱싱이 가능하다.
console.log(text[0], text[1], text[2], text[3], text[4]);
console.log(...text);

// const a = [1, 2, 3];
// const b = [4, 5];

// const c = [...a, ...b];
// console.log(c);

// 독립적인 값을 가질려면 Spread operator를 이용 해야함
const a = [1, 2, 3];
const b = [...a];

console.log(a);
console.log(b);

const o1 = {
  a: 1,
  b: 2,
};

// 만일 o2 = o1을 처리하게될시 서로의 값을 공유하기 때문에 안됨 deep copy 해야함
// 값이 중복일 경우 가장 뒤에 있는걸 적용해줌
const o2 = {
  ...o1,
  a: 2,
};

console.log(o2);

// 주의할 점은 ...은 전역에서 사용하면 에러가 발생하고 {}, [], () 안에서만 사용 해야함

function addSum(a, b, c) {
  console.log(a + b + c);
}

const sumArray = [10, 20, 30];

addSum(sumArray[0], sumArray[1], sumArray[2]);
addSum.apply(undefined, sumArray);
addSum(...sumArray);

const person = {
  hello: function () {
    console.log(this.name + "hello !!");
  },
};

const person2 = {
  name: "손흥민",
};

person.hello();

person.hello.apply(person2);
person.hello.call(person2);
