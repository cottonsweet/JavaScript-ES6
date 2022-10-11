const variable = "손흥민";
const text = `안녕하세요 저는 ${variable} 입니다.`;
const template = `<div><p>안녕 !!</p></div>`;

// tagged literal
function 해체분석기(strings, variables) {
  console.log(strings[1] + variables + strings[0]);
}
해체분석기`안녕하세요 ${variable} 입니다`;
