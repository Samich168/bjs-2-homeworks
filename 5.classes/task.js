"use strict";

class PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix(){
        this.state *= 1.5;
    }
    set state(newState){
        if (newState >= 100){
            this._state = 100;
        } 
        else if (newState <= 0){
            this._state = 0;
        }
        else{
            this._state = newState;
        }
    }
    get state(){
        return this._state;
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
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}
class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }
    addBook(book){
        if (book.state > 30){
            this.books.push(book);
        }
    }
    findBookBy(type, value){
        for (let book of this.books){
            if (book[type] === value){
                return book;
            }
        }
        return null;
    }
    giveBookByName(bookName){
        for (let i = 0; i < this.books.length; i++){
            if(this.books[i].name === bookName){
                return this.books.splice(i, 1)[0];
            }
        }
        return null;
    }
}

class Student{
    constructor(name){
        this.name = name;
        this.marks = [];
    }
    addMark(mark, subject){
        if (mark >= 2 && mark <= 5){
            if (!this.marks[subject]){
                this.marks[subject] = [];
            }
            this.marks[subject].push(mark);
        }
        return 0;        
    }
    getAverageBySubject(subject){
        if (!this.marks[subject] || this.marks[subject].length === 0){
            return 0;
        } else {
            let markSum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
            return markSum / this.marks[subject].length;
        }
    }
    getAverage(){
        let allSubjects = Object.keys(this.marks)
        let allMarks = allSubjects.reduce((acc, subject) => acc += this.getAverageBySubject(subject), 0);
        return allMarks / allSubjects.length
    }
}

const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
console.log(student.marks)
console.log(student.getAverageBySubject("физика")); // Средний балл по предмету физика 4.5
console.log(student.getAverageBySubject("биология")); // Вернёт 0, так как по такому предмету нет никаких оценок.
console.log(student.getAverage()); // Средний балл по всем предметам 4.75