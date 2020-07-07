// 11.1. 상속
// 간단하게도 extends를 추가하고 중복되는 코드를 지워주면 된다.
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

class PersonPlus extends Person {
    avg() {
        return (this.first + this.second) / 2;
    }
}

// PersonPlus는 Person을 상속하므로 PersonPlus에 적지 않은 요소와 메소드를 사용할 수 있다.
// PersonPlus를 통해 만든 kim이라는 객체는 Person에 있는 메소드인 sum을 사용할 수 있는 것이다
const kim = new PersonPlus('kim', 10, 20);
console.log('kim.sum()', kim.sum());
console.log('kim.avg()', kim.avg());