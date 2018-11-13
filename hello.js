"use strict";
var Greeting = /** @class */ (function () {
    function Greeting(message) {
        this.greeting = message;
    }
    Greeting.prototype.sayHello = function () {
        return "Hello " + this.greeting;
    };
    return Greeting;
}());
var tmp = new Greeting("World!!");
console.log(tmp.sayHello());
