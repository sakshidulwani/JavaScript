
const readPermission = 4;
const writePermission = 2;
const executePermission = 2;

let myPermission = 0;
myPermission = myPermission | writePermission;

let message = (myPermission & readPermission) ? "yes" : "no";

console.log(message);