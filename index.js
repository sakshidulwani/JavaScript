
const readPermission = 4;
const writePermission = 2;
const executePermission = 2;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);