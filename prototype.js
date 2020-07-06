function Person(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.sum = function () {
        return this.first + this.second;
    }
}

const kim = new Person('kim', 10, 20);
kim.sum = function () {
    return 'modified : ' + (this.first + this.second);
}
const lee = new Person('lee', 10, 10);
lee.sum = function () {
    return 'modified : ' + (this.first + this.second);
}
console.log('kim.sum()', kim.sum());
console.log('lee.sum()', lee.sum());
