// 13.3. Object.create()
// __proto__의 대체제를 살펴보자.

const superObj = { superVal: 'super' };

// var subObj = { subVal: 'sub' };
// subObj.__proto__ = superObj;

// 어떤 객체를 부모로 하는 새로운 객체를 만드는 표준화된 방법은 Object.create()을 이용하는 것이다.
// __proto__를 사용하는 것보다 Object.create()를 사용해 객체와 객체의 관계를 더 명확하게 지정해주는 것이 좋다.
const subObj = Object.create(superObj);
subObj.subVal = 'sub';
debugger;

console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);

subObj.superVal = 'sub';
console.log('subObj.superVal =>', subObj.superVal);
console.log('superObj.superVal =>', superObj.superVal);
