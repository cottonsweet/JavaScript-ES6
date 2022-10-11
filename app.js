// "use strict"; 엄격 모드

// 함수나 변수를 전역공간에서 만들면 {window}에 보관함

// 그냥 쓰거나 일반 함수 안에서 쓰면 {window} 객체를 보여줌

console.log(this);

function testFC() {
  console.log(this);
}
testFC();
window.testFC();

// ---------------------

// 오브젝트 내 함수안에서 쓰면 그 함수를 가지고 있는 오브젝트를 뜻함

const object = {
  data: "kim",
  func: function () {
    console.log(this);
  },
};

const obj = {
  data: {
    name: "반갑다",
    function() {
      console.log(this);
    },
  },
};

obj.data.function();

object.func();

function machine() {
  this.name = "kim"; // 새로 생성되는 오브젝트 ( 전문용어로 : 인스턴스 )
}

const 오브젝트 = new machine();

document.getElementById("버튼").addEventListener("click", function (e) {
  // console.log(this); // 이벤트리스너 안에서의 this는 e.currentTarget을 의미함
  // console.log(e.currentTarget);
  const array = [1, 2, 5];
  array.forEach(function () {
    console.log(this);
  });
});

const objects = {
  names: ["김", "이", "박"],
  func: function () {
    console.log(this);
    objects.names.forEach((a) => {
      console.log(this);
    });
  },
};

objects.func();

// ---------------------
