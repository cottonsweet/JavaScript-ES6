const person = new Map();

// Object 자료형은 자료 이름으로 글자만 가능한데, Map 자료형은 다 가능함.

person.set("name", "kim");
person.set("age", 20);

// 데이터 확인할때 person.get("key")
person.get("age");

// 데이터 삭제할때 person.delete("key")
person.delete("age");

// Set 자료형 -> 중복자로를 허용하지 않는 Array와 비슷한 자료형

let 출석부 = ["john", "tom", "andy", "tom"];

let 출석부2 = new Set(["john", "tom", "andy", "tom"]);

// // Set 자료형에 자료 추가하기
// 출석부2.add("tomato");

// // 자료 제거하기
// 출석부2.add("tomato");

// // 자료 있는지 확인하기 true or false 로 나옴ㄴ
// 출석부2.has("tomato");

// // 자료 갯수
// 출석부2.size;

// Set자료형 <-> Array 자료형
출석부 = [...출석부2];
