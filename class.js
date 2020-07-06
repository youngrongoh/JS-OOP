//9.1. class의 constructor function
// class로 객체를 만들 때는 function이라는 키워드 없이 함수명을 바로 쓴다.
// 객체가 생성될 때, 객체의 초기 상태를 정의하는 약속된 함수를 사용하는데, 바로 constructor이다.


class Person {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
        console.log('constructor');
    }
}

const kim = new Person('kim', 10, 20);

//호출한 적도 없는constructor가 먼저 찍히고 이어서 객체에 대한 console.log가 찍혔다.
//이는 객체가 생성되는 과정에서 constructor 함수가 실행되었다는 것을 의미한다.
console.log('kim', kim);

//이렇게 객체가 생성될 때 초기값을 세팅하는 constructor를 클래스 내에서 구현하는 방법을 살펴보았다.

// kim.sum = function () {
//     return 'this : ' + (this.first + this.second);
// }
// const lee = new Person('lee', 10, 10); // kim의 sum 메소드만 수정되고 lee의 sum에는 영향이 없다.
// console.log('kim.sum()', kim.sum());
// console.log('lee.sum()', lee.sum());