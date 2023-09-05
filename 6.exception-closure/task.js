function parseCount(number){
    let result = Number.parseFloat(number);
    try {
        if (isNaN(result)){
            throw new Error("Невалидное значение");
        } 
        return result;
    }
    catch (error){
        throw (error);
    }
    finally{
        return result;
    }
}
function validateCount(count){
    try{
        return parseCount(count)
    }
    catch(error){
        return error;
    }
}



class Triangle{
    constructor(a, b, c){
        if (a + b <= c || a + c <= b || b + c <= a){
            throw new Error("Треугольник с такими сторонами не существует");
        }


        this.a = a;
        this.a = b;
        this.a = c;
    }
    get perimeter(){
        return this.a + this.b + this.c;
    }
    get area(){
        halfmeter = 0.5 * (this.perimeter);
        area = Math.sqrt(this.halfmeter * (this.halfmeter - this.a)*(this.halfmeter - this.b)*(this.halfmeter - this.c))
        return parseFloat(area.toFixed(3))
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