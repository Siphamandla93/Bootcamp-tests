function isWeekday(Saturday){
var isWeekday=!Saturday.startsWith('S')
return isWeekday;
};
console.log(isWeekday('Monday'));
