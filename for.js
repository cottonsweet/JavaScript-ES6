// for (let i = 0; i < 3; i++) {} // 일반 반복문

// // arr.forEach(); // array 전용 반복문 , array 안의 자료를 뽑을때 씀

// // for (let key in obj) {
// //   // object 전용 반복문, object 안의 자료를 뽑을때 씀
// // }

// // for (let key of obj) {
// //   // iterable 전용 반복문, array, string, 여러가지 자료형 데이터들을 출력하기 위해서 사용함
// // }

class parent {}

parent.prototype.name = "Park";

const obj = new parent();

// for in 반복문은 enumerable 한것만 뽑아줌

for (let key in obj) {
  console.log(obj[key]);
}

const array = [2, 3, 4, 5];

for (let 자료 of array) {
  console.log(자료);
}

array[Symbol.iterator]();
