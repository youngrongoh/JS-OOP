//8.1 Classes
// 원래 자바스크립트에는 클래스 개념이 없었다.
// 여러 컴퓨터 언어들은 객체를 만드는 공장과 같은 역할로 class를 채택하고 있다.
// 앞서 우리는 객체를 찍어내는 공장으로 constructor를 사용했다.
// class는 constructor의 대체제로 사용할 수 있다.
// JavaScript에는 ECMA 6에서 추가되었다.

// 우리의 서비스에 새로운 기능을 도입하기에 앞서 [Can I use 닷컴](https://caniuse.com/)에서 브라우저 호환성을 확인해보는 것이 좋다.

// 또한 [Barbel](https://babeljs.io/)과 같은 컴파일러 혹은 트랜스파일러를 통해 이전 버전의 JavaScript로 변환해줄 수 있다.

//8.2 Class의 생산성
// class를 만들고 kim이라는 객체를 생성했다.
class Person {

}


const kim = new Person();
console.log('kim', kim);
// kim.sum = function () {
//     return 'this : ' + (this.first + this.second);
// }
// const lee = new Person('lee', 10, 10); // kim의 sum 메소드만 수정되고 lee의 sum에는 영향이 없다.
// console.log('kim.sum()', kim.sum());
// console.log('lee.sum()', lee.sum());