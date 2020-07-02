const kim = {
    name: '김',
    first: 10,
    second: 20,
    third: 30,
    sum: function () {
        return this.first + this.second + this.third;
    }
}

const lee = {
    name: '이',
    first: 10,
    second: 10,
    third: 10,
    sum: function () {
        return this.first + this.second + this.third;
    }
}

console.log('kim.sum()', kim.sum());
console.log('lee.sum()', lee.sum());