const myObj = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        state: 'NY'
    }
}

function checkPropInObj(str, obj) {
    return (str in obj);
}

console.log(checkPropInObj('name', myObj)); // true
console.log(checkPropInObj('city', myObj)); // false
console.log(checkPropInObj('state', myObj.address)); // true



