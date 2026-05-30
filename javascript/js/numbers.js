//배열 생성
let numbers = new Array(4);

// console.log(numbers);
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;

console.log(numbers);
console.log("크기:", numbers.length);

//for문을 이용한 배열 요소 출력
let demo = document.getElementById("demo");

// for(let i = 0; i < numbers.length; i++) {
//     // console.log(numbers[i]);
//     demo.innerHTML += numbers[i] + '<br>';
    
// }

// 배열객체에서 제공된 forEach() 메서드를 이용한 출력
numbers.forEach((number, index) => {
    demo.innerHTML += `${numbers[index]}<br>`;
})