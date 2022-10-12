const variable = "손흥민";
const text = `안녕하세요 저는 ${variable} 입니다.`;
const template = `<div><p>안녕 !!</p></div>`;

// tagged literal

// function 해체분석기(strings, variables) {
//   console.log(strings[1] + variables + strings[0]);
// }
// 해체분석기`안녕하세요 ${variable} 입니다`;

const pants = 0;
const socks = 100;
`바지${pants} 양말${socks}`;

function 분석기(strings, variable1, variable2) {
  //console.log(strings[1] + variable1 + strings[0] + variable2);
  if (variable1 === 0) {
    console.log(`${strings[0]}는 다 팔렸어요 ㅠㅠ`);
  } else {
    console.log(`${strings[0]}는 현재 ${variable1} 개 만큼 재고가 남아있습니다 !~`);
  }
}

분석기`바지${pants} 양말${socks}`;
