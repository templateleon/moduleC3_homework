function printOwnProperties(obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(prop + ': ' + obj[prop]);
        }
    }
}

// Пример использования
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2019,
    color: 'black'
};

printOwnProperties(car); // Выводит в консоль make: Toyota, model: Camry, year: 2019, color: black










