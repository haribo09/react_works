
//출력
console.log("Hello, World");
console.log("안녕, 세계야");

/*
function hello(name) {
    console.log(`Hello, ${name}님`);    
}
*/

//한줄인 경우 중괄화 생략 가능
const hello = (name) => console.log(`Hello, ${name}님`);

hello("홍길동");
hello("김철수");