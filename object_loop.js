const memberArray = ['철수', '영희', '민수'];
// 가장 원시적인 반복문, while문!
console.group('array loop');
let i = 0;
while (i < memberArray.length) {
    console.log(memberArray[i]);
    i = i + 1;
}
console.groupEnd('array loop');


const memberObject = {
    menager: '철수',
    developer: '영희',
    designer: '민서'
}
console.group('object loop');
for (let name in memberObject) {
    console.log(name, memberObject[name]);
}
console.groupEnd('object loop');