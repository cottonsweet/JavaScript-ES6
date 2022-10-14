// ES6 문법부터 추가된 destructuring 이라는게 있음 다른말로 패턴매칭 이라고 불림

const arr = [2, 3, 4];

// array 데이터를 전부 변수에 담으려면 아래처럼 모양에 맞춰 값이 대입됨 아래와 같은 변수선언문법이 destructuring 문법
const [a, b, c] = [2, 3, 4]; // 또는 어레이변수명 arr

// array destructuring 할때 대입값을 빼먹었다면 파라미터 디폴트값 처럼 기본값을 선언변수에 지정이 가능함
const [d, e, f = 10] = [2, 4];

// 오브젝트 또한 데이터를 꺼내서 변수에 대입할수 있다.

const object = {
  name: "Kim23",
  age: 20,
};

// 아래코드처럼
// 조건: 변수명을 obj의 key값과 똑같이 만들어줘야함.
const { name, age } = { name: "kim", age: 30 };

// 아래처럼 값을 대입안했을때, 디폴트값으로 이용가능함
const { school, money = 500 } = { school: "seoul" };

// 변수명 또한 아래처럼 변경가능 food > kimchi로 변수명이 변경됨 해당 값 또한 디폴트값이 가능
const { food: kimchi = "tomato" } = { food: "pizza" };

// 변수를 object에 넣고싶을때
const lastName = "park";
const setAge = 10;

const list = { name: lastName, age: setAge };
const list2 = { lastName, setAge };

// 함수 파라미터 만들때도 destructuring 문법 사용가능함 또한 array도 가능함 ~
const obj2 = {
  name: "choi",
  age: 5,
};

const goodFunc = ({ name, age }) => {
  console.log(name);
  console.log(age);
};

goodFunc({ name1: "wowowow", age: 500 });

// ------------------------------- 연습문제 ------------------------------

var [number, address] = [30, "seoul"];
var { address: ad, number = 20 } = { address, number };
// address,ad : seoul, number : 30

let inbody = {
  body: {
    height: 190,
    weight: 70,
  },
  game: { type: "오버워치" },
  size: ["상의 Large", "바지 30인치"],
};

let wow = ({
  body: { height, weight },
  game: { type },
  size: [상의탈, 하의],
} = inbody);
