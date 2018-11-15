interface IBook {
    bookName: string;   // property
    readonly bookAuthor: string;    // readonly property
    bookISBN?: string;  // optional property
    getName(): string;  // method
}

function printBookInfo(paramBook: IBook): void {
    console.log(paramBook.bookName);
    console.log(paramBook.getName());
}

let myBook: IBook;

myBook = {
    bookAuthor: "괴테",
    bookName: "젊은 베르테르의 슬픔",
    getName() {
        return this.bookName;
    },
};

// myBook 의 타입이 IBook 으로 지정되어 있지 않더라도 에러없이 컴파일이 가능함
// myBook 의 원소가 IBook type 의 값을 모두 가지고 있기 때문에 IBook Interface 로 간주
printBookInfo(myBook);

// Indexable interface

interface IObj {
    [idx: string]: string | number;
    [index: number]: string | number;
    myName: string;
    myAddress: string;
    myAge: number
}

let obj: IObj = {
    myAddress: "서울",
    myAge: 30,
    myName: "홍길동",
};

console.log(obj.myName);           // "." operator 이용

let keys = Object.keys(obj);       // 객체의 key값들에 대한 배열 획득

for(let i = 0; i< keys.length; i++) {
    console.log(obj[keys[i]]);     // 배열형식을 이용
}

// constructor interface
interface IPersonConstructor {
    new (n:string, a:number): Person;
}

const PersonFactory = {
    getInstance: function(construct:IPersonConstructor,
                          name:string,
                          age:number) {
        return new construct(name,age);
    }
};

class Person {
    myName: string;
    myAge: number;

    constructor(name:string, age:number) {
        this.myName = name;
        this.myAge = age;
    }

    printInfo() {
        console.log("이름:" + this.myName + ", 나이:" + this.myAge);
    }
}


let obj = PersonFactory.getInstance(Person, "홍길동", 30);
obj.printInfo();
