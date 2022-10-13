// extends (부모의 class 상속받아 만듬)

class grandFather {
  constructor(name, name2) {
    this.firstName = "kim";
    this.lastName = name;
    this.lastName2 = name2;
  }
  sayHi(name) {
    console.log("저는 할아버지 입니다.", name);
  }
}

const grandFather1 = new grandFather("만덕");

// grandFather의 속성을 그대로 물려받음 ( 즉 grandFather의 유사한 클래스를 만들고 싶음 )
class father extends grandFather {
  constructor(name, name2) {
    // extends 해서 만든 class는 this를 그냥 사용할수 없으며 사용할려면 super(); 함수를 호출 후 그 다음에 코드를 기입해야 사용할수 있음.
    // suepr(); 물려받는 class의 constructor라는 뜻
    super(name, name2); // 부모 class의 constructor를 의미함.
    this.age = 50;
  }
  sayHi() {
    console.log("저는 아버지 입니다.");
    super.sayHi("헐 !!!"); // 부모 class의 prototype을 의미함.
  }
}

const father1 = new father("만수", "헐");
