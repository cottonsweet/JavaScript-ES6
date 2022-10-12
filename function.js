const addSum = (a, b = 10) => {
  console.log(a + b);
  console.log(b);
};

// arrow function 에서는 안먹힘

function argsFunc(a, b, c) {
  console.log(...arguments);
}

argsFunc(1, 2, 3, 4, 5);

// 함수에 오는 파라미터 앞에 ...을 붙힐경우 모든 파라미터를 array로 감싸주겠다는 의미.

function argsFunc2(...rest) {
  console.log(rest);
}

argsFunc2(1, 2, 3, 4, 5, 6, 7, 8);
// rest파라미터는 맨 마지막에 써야함, 맨앞 또는 중간에 쓸 경우 오류가 출력됨 그리고 한번만 사용 가능
function 함수2(...rest) {
  for (let i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
}

함수2(1, 2, 3, 4);

// -------------------- 연습문제 --------------------

// 1. spread 문제 1

// var a = [1, 2, 3];
// var b = "김밥";
// var c = [...b, ...a];

// 콘솔로그 > ['김','밥', 1, 2, 3]

// 2. spread 문제 2

// var a = [1, 2, 3];
// var b = ["you", "are"];
// var c = function (a, b) {
//   console.log([[...a], ...[...b]][1]);
// };

// 콘솔로그 > you

// 3. default 파라미터 문제 1

// function 함수(a = 5, b = a * 2) {
//   console.log(a + b);
//   return 10;
// }
// 함수(3);

// 콘솔로그 > 9

// 4. default 파라미터 문제 2

// function 함수(a = 5, b = a * 2) {
//   console.log(a + b);
// }

// 함수(undefined, undefined);

// 콘솔로그 > 15

// 5. array를 만들어주는 함수 제작

// function 어레이(...rest) {
//   console.log(rest);
// }

// var newArray = 어레이(1, 2, 3, 4, 5);
// console.log(newArray);

// 6. 최댓값 구하기

// const numbers = [2, 3, 4, 5, 6, 1, 3, 2, 5, 5, 4, 6, 7];
// const maxNumber = Math.max(...numbers);
// console.log(maxNumber);

// 7. 글자를 알파벳순으로 정렬해주는 함수 제작

// function 정렬(text) {
//   const sortText = [...text].sort();
//   console.log(sortText);
//   console.log(...sortText);
// }

// 정렬("bear");

// 8. 데이터마이닝 기능 만들기
// array 안에 ... 처리를 해줄경우 한글자씩 따줌
function 글자세기(글자) {
  let result = {};
  [...글자].forEach(function (a) {
    if (result[a] > 0) {
      result[a] += 1;
    } else {
      result[a] = 1;
    }
  });
  console.log(result);
}
글자세기("aabbcc5333");
