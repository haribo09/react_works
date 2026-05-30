//basicModule 가져오기
// let square = require("./lib/basicModule.js");
let {square, add} = require("./lib/basicModule.js"); //구조 분해 할당으로 가져오기

//함수 호출
console.log(square(3));
console.log(add(7, 8));
