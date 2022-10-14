// 1번문제 강아지라는 class구조를 만들어서 오브젝트들을 뽑고 타입(견종)과 색은 파라미터로 받아야 한다.

class dogsList {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
  setAge() {
    if (this instanceof catsList) {
      this.age++;
    }
  }
}

const dog1 = new dogsList("말티즈", "white");
const dog2 = new dogsList("진돗개", "brown");

console.log(dog1);
console.log(dog2);

// 2번문제  1번의 class를 유사하게 만들어서 고양이 오브젝트들을 뽑아야함
// 3번 문제 1번과 2번 각 object에 함수기능을 추가하되, 강아지 오브젝트에서 사용하면 오류가 발생되어야하고, 고양이 오브젝트에서 사용하게 되면 현재나이 + 1
class catsList extends dogsList {
  constructor(type, color, age) {
    super(type, color);
    this.age = parseInt(age);
  }
}

const cat1 = new catsList("코숏", "white", 5);
const cat2 = new catsList("러시안블루", "brown", 2);

console.log(cat1);
console.log(cat2);

cat1.setAge();
cat2.setAge();

console.log(cat1);
console.log(cat2);

// 4번문제 get/set 응용1
// 조건(1) 모든 Unit의 인스턴스는 공격력, 체력 속성이 있으며 기본 공격력은 5, 기본 체력은 100으로 설정 되어야함
// 조건(2) 모든 Unit의 인스턴스는 전투력을 측정해주는 battlePoint라는 getter가 있음 (console인스턴스.battlepoint 하면 현재 공격력과 체력을 더한값을 출력 해야함)
// 조건(3) 모든 Unit의 인스턴스는 heal이라는 setter가 있는데 인스턴스.heal= parameter 할시 기존값 + parameter 가 되어야함

class Unit {
  constructor() {
    (this.attack = 5), (this.health = 100);
  }
  get battlePoint() {
    return this.attack + this.health;
  }
  set heal(health) {
    return (this.health += health);
  }
}

const unit1 = new Unit();
console.log(unit1);
console.log(unit1.battlePoint);

unit1.heal = 50;
console.log(unit1);
console.log(unit1.battlePoint);

const unit2 = new Unit();
console.log(unit2);
console.log(unit2.battlePoint);

unit2.heal = 1000;
console.log(unit2);
console.log(unit2.battlePoint);

// 5번문제 get/set 응용2
// 조건(1) data 오브젝트안에 setter 역활 함수를 하나만들고, setter 함수에 아무런 자연수나 파라미터를 입력하면 홀수는 odd, 짝수는 even에 array 형식으로 저장
// 조건(2) data 오브젝트안에 getter 역활 함수를 하나 만들고, getter 함수를 사용하면 odd, even 저장된 모든 데이터들을 숫자순으로 정렬되어 출력해야함

const data = {
  odd: [],
  even: [],
  setter(...number) {
    number.forEach((arr) => (arr % 2 === 0 ? this.even.push(arr) : this.odd.push(arr)));
  },
  get getter() {
    return [...this.odd, ...this.even].sort((a, b) => a - b);
  },
};
