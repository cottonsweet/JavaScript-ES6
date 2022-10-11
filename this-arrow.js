//const button = document.getElementById("버튼");

const people = {
  name: "손흥민",
  sayHi: function () {
    console.log(`안녕 나는 ${this.name}`);
  },
};

people.sayHi();

const files = {
  data: [1, 2, 3, 4, 5],
};

files.result = function () {
  let sum = 0;
  this.data.forEach((a) => {
    sum = sum + a;
    return sum;
  });
  console.log(sum);
  //   files.data.reduce(function add(sum, a) {
  //     return sum + a;
  //   });
};

files.result();

// const handleBtn = () => {
//   setTimeout(function () {
//     console.log(this.innerHTML);
//   }, 1000);
// };

function handleBtn() {
  setTimeout(() => {
    console.log(this.innerHTML);
  }, 1000);
}

// button.addEventListener("click", handleBtn);

// hello();

// function hello() {
//   console.log(안녕);
//   let 안녕 = "Hello!";
// }

// 함수();
// var 함수 = function () {
//   console.log(안녕);
//   var 안녕 = "Hello!";
// };

// let a = 1;
// var 함수 = function () {
//   a = 2;
// };
// console.log(a);

// let a = 1;
// var b = 2;
// window.a = 3;
// window.b = 4;

// console.log(b);

// for (let i = 1; i < 6; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

const buttons = document.querySelectorAll("button");
const modals = document.querySelectorAll("div");
for (let i = 0; i < 3; i++) {
  buttons[i].addEventListener("click", () => {
    modals[i].style.display = "block";
  });
}
