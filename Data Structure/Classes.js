//Classes Basic

class Student{
    constructor(fname, lname, year){
        this.fname = fname;
        this.lname = lname;
        this.grade = year;
    }
    //method
    fullName(){
        return `Your full name is ${this.fname} ${this.lname}`;
    }

}

let jose = new Student ("jose", "smith", 2)

console.log(jose.fullName())