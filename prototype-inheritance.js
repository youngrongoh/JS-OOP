// 13.2. __proto__
// constructor 함수가 아니라 객체를 통해 만들어보자.
// JavaScript에서는 클래스가 아닌 인스턴스, 즉 객체를 다른 객체의 자식으로 만들 수 있다.
// 자식으로 만들길 원하는 객체의 __proto__라는 프로토타입 링크를 사용하면 된다.
var superObj = { superVal: 'super' };
var subObj = { subVal: 'sub' };
subObj.__proto__ = superObj;
console.log('subObj.subVal =>', subObj.subVal);// subObj.subVal => sub
console.log('subObj.superVal =>', subObj.superVal); // subObj.superVal => super

// 자식 객체에서 상속받은 프로퍼티의 값을 바꾸면,
// 그 자식 객체의 __proto__에 있는 프로퍼티의 값을 바꾼 것이지,
// 부모 객체의 프로퍼티의 값을 직접 바꾼 것이 아니다.
subObj.superVal = 'sub';
console.log('subObj.superVal =>', subObj.superVal); // super
console.log('superObj.superVal =>', superObj.superVal); // super

// 이렇게 __proto__만 붙여주면 다른 객체의 자식이 된다.
// 굉장히 유연한 특징이지만 이로 인해 사고의 가능성이 있다.

// __proto__는 JavaScript 표준으로는 인정하고 있지 않다.
// 그러나 대부분의 브라우저와 자바스크립트가 구동되는 시스템들이 이를 구현하여 제공하고 있긴 하다.