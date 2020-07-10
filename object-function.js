// 14.3. bind
// call 못지않게 독특한 bind라는 것이 있다.
// bind는 묶는다 엮는다는 의미이다.
// call은 호출될 때마다 내부의 this를 바꿔주었다면,
// bind는 내부적으로 사용할 this를 영구적으로 고정시키는 것이다.
const kim = { name: 'kim', first: 10, second: 20 };
const lee = { name: 'lee', first: 10, second: 10 };
function sum(prefix) {
    return prefix + (this.first + this.second);
}

console.log("sum.call(kim)", sum.call(kim, '=> ')); // sum.call(kim) => 30
console.log("sum.call(lee)", sum.call(lee, ': ')); // sum.call(lee) : 20

const kimSum = sum.bind(kim, '-> ');
console.log('kimSum()', kimSum()); // kimSum() -> 30

// call은 새로운 함수로 할당할 수 없다.
// const leeSum = sum.call(lee, '->');