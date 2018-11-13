class Greeting {
    private greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    public sayHello() {
        return "Hello " + this.greeting;
    }
}

let tmp = new Greeting("World!!");

console.log(tmp.sayHello());