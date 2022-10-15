// ES8 문법부터 제공함 async/await

async function add() {
  const promise = new Promise(function (resolve, reject) {
    const button = document.querySelector("button");
    const handleClick = () => {
      resolve("성공했어요");
    };
    button.addEventListener("click", handleClick);
  });
  const buttonResult = await promise;
  try {
    console.log(buttonResult);
  } catch {
    console.log("실패함");
  }
}

// add().then(function (result) {
//   console.log("성공", result);
// });

add();
