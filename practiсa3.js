function createObjWithoutProto() {
    return Object.create(null);
}

const obj = createObjWithoutProto();
console.log(obj); // {}

console.log(obj.toString()); // Uncaught TypeError: obj.toString is not a function











