function parseCount(count){
    let result = parseFloat(count)
    if (isNaN(result)){
        throw new Error("Невалидное значение"); 
    }
    return result;
}

function validateCount(count){
    try{
    console.log(parseCount(count));
    }
    catch(error){
        console.log(error.message);
    }
}

class Triangle{
    constructor(side1, side2, side3){
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        if (side1 + side2 < side3 || side1 + side3 < side2 || side2 + side3 < side1){
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    get perimeter(){
        return this.side1 + this.side2 + this.side3;
    }
    get area(){
        let p = 0.5 * (this.perimeter);
        let area = (p * (p - this.side1) * (p - this.side2) * (p - this.side3)) ** 0.5;
        return parseFloat(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}

const triangle = new Triangle(6,10,15);
console.log(triangle.area)
