function firstFuc(parameter) {
  console.log(1);
  parameter();
}

function secondFuc() {
  console.log(2);
}

firstFuc(secondFuc);
