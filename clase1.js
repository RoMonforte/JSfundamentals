var rmc = {
    name: 'Rmc',
    last_name: 'Mft',
    age: 28,
    weight: 30 
}

console.log('Al inicio del a;o ' + rmc.name + ' pesa ' + rmc.weight + ' kg');

const INCREMENT = 0.200;
const DECREMENT = -0.200;

const weightIncrement = person => person.weight += INCREMENT
const weightDecrement = person => person.weight -= DECREMENT


for (var i = 1; i<= 365; i++) {
    var random = Math.random()
    if (random < 0.25) {
        weightIncrement(rmc)
    } else if (random < 0.50){
        weightDecrement(rmc)
    }
}

console.log 


console.log('Al final del a;o ' + rmc.name + ' pesa ' + rmc.weight.toFixed(2) + ' kg');
