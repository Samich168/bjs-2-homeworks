class PrintEditionItem{

    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix(){
        this.state = this.state * 1.5;
    }
    set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }
    get state(){
        return this._state
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "book"
        this.author = author;
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel'
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective'
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic'
    }
}

class Library{
    constructor(name){
        this.name = name; 
        this.books = [];
    }
    addBook(book){
        if(book instanceof PrintEditionItem && book.state > 30){
            this.books.push(book);
        }
    }
    findBookBy(type, value){
        for(const book of this.books){
            if(book[type] === value){
                return book;
            }
        }
        return null;
    }
    giveBookByName(bookName){
        const book = this.books.find(book => book.name === bookName)
        if (book) {
            this.books = this.books.filter(item => item !== book); // Удалить найденную книгу из массива
            return book;
        } else {
            return null;
        }
    }
}

const library = new Library("Библиотека имени Ленина");

class Student{
    constructor(name){
        this.name = name;
        this.marks = {};
    }
    addMark(mark, subject){
        if (mark <= 5 && mark >= 2){
            if(!this.marks[subject]){
                this.marks[subject] = [];
            }
            this.marks[subject].push(mark);
        }
    }

    
    getAverageBySubject(subject){
        let counter = 0;
        if(this.marks[subject]){
            for (const mark of this.marks[subject]){
                counter += mark ;
            }
            return (counter / this.marks[subject].length);
        }
        return 0;
    }
    getAverage(){
        let avgCounter = 0;
        let counter = 0;
        for(const sub of Object.keys(this.marks)){
            if (this.marks[sub]){
                avgCounter += this.getAverageBySubject(sub);
                counter += 1;
            }
        }
        return avgCounter / counter;
    }

}

const student = new Student("Олег Никифоров");
student.getAverageBySubject("физика"); // Средний балл по предмету физика 4.5