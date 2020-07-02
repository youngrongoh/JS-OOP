const memberArray = ['철수', '영희', '민수'];
console.log("memberArray[2]", memberArray[2]);

const memberObject = {
    menager: '철수',
    developer: '영희',
    designer: '민서'
}
memberObject.designer = '민수';
console.log("memberObject.designer", memberObject.designer);
console.log("memberObject['designer']", memberObject['designer']);

delete memberObject.manager
console.log('after delete memberObject.manager', memberObject.manager);