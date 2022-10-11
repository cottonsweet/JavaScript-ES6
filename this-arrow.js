const button = document.getElementById("버튼");

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

button.addEventListener("click", handleBtn);
