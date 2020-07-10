// 14.2.call
const kim = { name: 'kim', first: 10, second: 20 };
const lee = { name: 'lee', first: 10, second: 10 };
function sum() {
    return this.first + this.second;
}
// sum();
sum.call(kim);
// 모든 함수는 call이라고 하는 메소드를 가지고 있다.
// JavaScript에서는 함수도 객체이기 때문이다.

// sum은 kim이라는 객체에 속해있는 메소드가 아니었다.
// 그런데, sum 안에 있는 call이라는 메소드를 통해
// 마치 sum이 kim 안에 있는 메소드인 것 처럼 실행되었다.
console.log("sum.call(kim) =>", sum.call(kim)); // sum.call(kim) => 30
console.log("sum.call(lee) =>", sum.call(lee)); // sum.call(lee) => 20

// call의 첫번째 인자로 그 함수의 내부적인 this를 무엇으로 할 것인가가 오고
// 두번째 인자부터는 그 함수의 파라미터들이 오게 된다.
function sum2(prefix) {
    return prefix + (this.first + this.second);
}
console.log("sum2.call(kim)", sum2.call(kim, '=> ')); // sum2.call(kim) => 30
console.log("sum2.call(lee)", sum2.call(lee, ': ')); // sum2.call(lee) : 20

// call과 비슷하게 동작하는 apply라는 것도 있다.