const superObj = { superVal: 'super' };

// var subObj = { subVal: 'sub' };
// subObj.__proto__ = superObj;

const subObj = Object.create(superObj);
subObj.subVal = 'sub';
debugger;

console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);

subObj.superVal = 'sub';
console.log('subObj.superVal =>', subObj.superVal);
console.log('superObj.superVal =>', superObj.superVal);

// 13.4. 객체상속의 사용
// __proto__와 표준인 Object.create()를 사용하여
// 새로운 객체를 만들고 부모 객체에 없는 기능을 자식 객체에만 추가해보자.

const kim = {
    name: 'kim',
    first: 10, second: 20,
    sum: function () { return this.first + this.second }
}
// 1) Object.create()
const lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function () {
    return (this.first + this.second) / 2;
}

// 2) __proto__ 사용
// const lee = {
//     name: 'lee',
//     first: 10, second: 10,
//     avg: function () {
//         return (this.first + this.second) / 2;
//     }
// }
// lee.__proto__ = kim;

console.log('lee.sum():', lee.sum());
console.log('lee.avg():', lee.avg());