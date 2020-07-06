// 10.1 메소드 구현
// Method: 객체에 소속된 함수

// class 안에 함수를 넣으면 method로 동작하게 된다.
// 이 때, function 키워는 쓰지 않는다!
class Person {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return 'prototype : ' + (this.first + this.second);
    }
}


// kim에서만 sum 메소드를 다르게 동작하도록 수정할 수 있다.
const kim = new Person('kim', 10, 20);
kim.sum = function () {
    return 'this : ' + (this.first + this.second);
}
const lee = new Person('lee', 10, 10); // kim의 sum 메소드만 수정되고 lee의 sum에는 영향이 없다.
console.log('kim.sum()', kim.sum());
console.log('lee.sum()', lee.sum());