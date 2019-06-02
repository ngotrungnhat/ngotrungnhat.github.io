newFunction();
function newFunction() {
    var retangles = newFunction_1();
    var dientich = retangles.map((value) => {
        return (value.width * value.height);
    });
    console.log(dientich);
    var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const sole = number.filter((item) => {
        return item % 2 === 0;
    });
    console.log(sole);
    function newFunction_1() {
        return [
            { width: 10, height: 20 },
            { width: 15, height: 60 },
            { width: 25, height: 40 },
        ];
    }
}
