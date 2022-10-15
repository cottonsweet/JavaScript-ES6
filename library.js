const a = 10;
export const b = 20;
const c = 30;

export { a };
export default c;

// export { variable }를 사용할 경우 변수이름을 정확히 해줘야함
// export default variable을 사용할 경우 html에서 변수 작명이 가능함
// import 할때 default 맨 왼쪽으로
// import from 변수명 작명할때, (export 키워드로만) variable as newvariablename
// import * as 별명 모든걸 불러옴 출력할땐 > 별명.variable
// 프론트엔드 개발에선 srcript src="" 호환성이 킹왕짱
// import export 문법은 es6문법인데 IE에선 안됨
// import export 사용이유는 react or angular 사용할때 쓰임
