const pro = new Promise(function (resolve, reject) {
  console.log("1");
  setTimeout(function () {
    resolve();
  }, 1000);
  console.log("3");
});

pro
  .then(function () {
    console.log("good");
  })
  .catch(function () {
    console.log("failed");
  });

const imgLoading = new Promise(function (resolve, reject) {
  const img = document.querySelector("#test");
  img.addEventListener("load", function () {
    resolve();
  });
  img.addEventListener("error", function () {
    reject();
  });
});

imgLoading
  .then(function () {
    console.log("이미지 로딩 성공");
  })
  .catch(function () {
    console.log("이미지 로딩 실패");
  });

const ajaxFunc = (url) => {
  return new Promise(function (resolve, reject) {
    $.get(url).done(function (result) {
      resolve(result);
    });
  });
};
const promiseHello = ajaxFunc("https://codingapple1.github.io/hello.txt");

promiseHello
  .then(function (result) {
    console.log(result);
    return ajaxFunc("https://codingapple1.github.io/hello2.txt");
  })
  .then(function (result) {
    console.log(result);
  });
