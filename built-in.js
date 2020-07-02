console.log('Math.PI', Math.PI);
console.log('Math.random()', Math.random());
console.log('Math.floor(3,9)', Math.floor(3.9));

const MyMath = {
    PI: Math.PI,
    random: function () {
        return Math.random();
    },
    floor: function (value) {
        return Math.floor(value);
    }
}
console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random", MyMath.random());
console.log("MyMath.floor(3.9)", MyMath.floor(3.9));

const MyMath_PI = Math.PI;
function MyMath_random() {
    return Math.random();
}
function MyMath_floor(value) {
    return Math.floor(value);
}