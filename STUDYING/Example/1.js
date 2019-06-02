// const order = [
//     {name: "A", quantity: 2, unitPrice: 200},
//     {name: "B", quantity: 3, unitPrice: 400},
//     {name: "C", quantity: 4, unitPrice: 600},
//     {name: "D", quantity: 29, unitPrice: 20},
// ]
// var totalPrice = order.reduce((currentTotal, productPrice) => {
//     console.log(currentTotal, productPrice)
//     return currentTotal + (productPrice.quantity * productPrice.unitPrice)
// }, 0);
// console.log('totalPrice', totalPrice)

// var numbers = [1, 2, 3, 4, 5, 6];
// var num = numbers.reduce((a, b) => {
//     console.log(a, b)
//     return a + b;
// })
// console.log('num', num)

// const tom = {
//     name: "Tom",
//     stomach: [],
//     eat: function(mouse) {
//        this.stomach.push(mouse);
//        return this;
//     }
// }

// const mouse1 = {name: "mouse01"};
// const mouse2 = {name: "mouse02"};
// const mouse3 = {name: "mouse03"};
// tom.eat(mouse1.name).eat(mouse2).eat(mouse3)
//  console.log('tom', tom)

// function Mouse(color, weight, height) {
//     this.color = color,
//     this.weight = weight,
//     this.height = height
// }
// const tom = new Mouse("yellow", 0.2, 300)
// console.log('tom', tom)

// function Car(height, weight, color){
//     this.height = height,
//     this.weight = weight,
//     this.color = color
//     this.run = () => {
//         console.log("Car Run....")
//     }
// }

// const BMW = new Car(200, 400, "black")
// BMW.prototype.run = 
// BMW.run()
// console.log('Car.prototype', Car.prototype)
// Car.prototype.linght = function(){
//     console.log("baatj ddenf")
// }
// BMW.linght()


// function person (){
//     this.name = "Ngo",
//     this.age = 24,
//     this.hello = function(){
//         console.log("hello, i'm " + this.name + " năm nay tôi " + this.age + " tuổi")
//     }
// }
// // person.hello()
// const nhat = new person()
// // nhat.hello()

// function superman (name, age){
//     this.name = name,
//     this.age = age
// }

// superman.prototype = new person()
// const supergirl = new superman("Trang", 22)
// supergirl.hello()

function Mouse (color){
    this.color = color,
    this.height = 200,
    this.dead = false
}

Mouse.prototype.die = function (){
    this.dead = true
}

const Tom = new Mouse("black")
console.log('Tom', Tom)
delete Tom.color;
console.log('Tom', Tom)