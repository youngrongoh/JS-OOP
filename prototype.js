// 7.2. Prototype을 이용해서 재사용성을 높이기
// 동일한 생성자를 사용하는 객체들의 공통된 메소드나 요소를 한 번에 수정해줄 수는 없을까?

function Person(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
}

//실행 결과는 이전과 같다.
// 그러나 sum 함수가 constructor 안에 메소드로서 들어가 있지 않기 때문에, 객체가 만들어질 때마다 새로운 메소드가 만들어지지 않는다.
// 즉, 한 번만 실행 되므로 성능과 메모리를 절약할 수 있다.
// 무엇보다, 가장 중요한 효과는 prototype 하나만 수정해도 이를 사용하는 모든 객체에 반영된다는 것이다.
Person.prototype.sum = function () {
    return 'modified : ' + (this.first + this.second);
}

// 일부 객체만 다르게 동작하도록 할 수도 있다.
const kim = new Person('kim', 10, 20);
kim.sum = function () {
    return 'this : ' + (this.first + this.second);
}
const lee = new Person('lee', 10, 10); // kim의 sum 메소드만 수정되고 lee의 sum에는 영향이 없다.
console.log('kim.sum()', kim.sum());
console.log('lee.sum()', lee.sum());
