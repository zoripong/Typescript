"use strict";
function printBookInfo(paramBook) {
    console.log(paramBook.bookName);
    console.log(paramBook.getName());
}
var myBook;
myBook = {
    bookAuthor: "괴테",
    bookName: "젊은 베르테르의 슬픔",
    getName: function () {
        return this.bookName;
    },
};
// myBook 의 타입이 IBook 으로 지정되어 있지 않더라도 에러없이 컴파일이 가능함
// myBook 의 원소가 IBook type 의 값을 모두 가지고 있기 때문에 IBook Interface 로 간주
printBookInfo(myBook);
var obj = {
    myAddress: "서울",
    myAge: 30,
    myName: "홍길동",
};
console.log(obj.myName); // "." operator 이용
var keys = Object.keys(obj); // 객체의 key값들에 대한 배열 획득
for (var i = 0; i < keys.length; i++) {
    console.log(obj[keys[i]]); // 배열형식을 이용
}
var PersonFactory = {
    getInstance: function (construct, name, age) {
        return new construct(name, age);
    }
};
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.myName = name;
        this.myAge = age;
    }
    Person.prototype.printInfo = function () {
        console.log("이름:" + this.myName + ", 나이:" + this.myAge);
    };
    return Person;
}());
var obj = PersonFactory.getInstance(Person, "홍길동", 30);
obj.printInfo();
