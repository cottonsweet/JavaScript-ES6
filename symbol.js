// 심볼의 용도 : Object 자료형의 비밀스런 Key 값 ( 비밀스런 데이터를 저장하고 싶을때 )

const symbol = Symbol("설명");

const weight = Symbol("몸무게");
const height = Symbol("키");

const a = Symbol.for("설명1");
const b = Symbol.for("설명1");

const person = {
  name: "Kim",
  [height]: 180,
};
person.weight = 100;
person[weight] = 200;

for (let key in person) {
  console.log(person[key]);
}
