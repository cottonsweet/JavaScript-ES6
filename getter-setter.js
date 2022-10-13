// 함수를 만들어 object 데이터를 다루는 이유
// 1. object 자료가 복잡할 때 편함
// 2. object 자료 수정할 때 편함 (유지보수에 좋음)

const people = {
  name: "park",
  age: 30,
  get nextAge() {
    return this.age + 1;
  },
  set setAge(changeAge) {
    return (this.age = parseInt(changeAge));
  },
};

// people.setAge('20')  << 이런 문법이 꼴보기 싫다면 es5 문법부터인 set / get을 사용하면 됨

// get : 데이터를 꺼내쓰는 함수에
// set : 데이터를 변경하는 함수에
// set or get 키워드를 함수 앞(왼쪽)에 사용할 경우 소괄호를 떼어줌
// 전문용어로 getter / setter 라고 함

// get 키워드 특징 :  함수들(getter)은 데이터를 꺼내쓰는 함수에 사용되는 키워드라 무조건 return이 있어야함 그리고 파라미터가 없어야함
// set 키워드 특징 :  setter함수는 파라미터가 무조건 1개가 있어야함 2개는 안됨 무조건 1개  !

people.setAge = "50"; // << set 키워드를 사용했을때 다만 함수 앞(왼쪽)에 set을 적어줘야함
people.nextAge; // << get 키워드를 사용했을때 다만 함수 앞(왼쪽)에 get을 적어줘야함

class human {
  constructor() {
    this.name = "Park";
    this.age = 20;
  }
  get getAge() {
    return this.age + 1;
  }
  set setAge(age) {
    this.age = parseInt(age);
  }
}

const human1 = new human();
