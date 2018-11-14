# Typescript Getting Started

## Download

> Environment

```
npm 6.4.1
```

> download typescript module

```
npm install -g typescript
```

> IDE

```
WebStorm 2018.2.5
```

## const 와 let

- TypeScript 에서는 'var'를 사용하지 않는다. const 와 let 을 이용한다.
- [그 이유는 여기에](https://moon9342.github.io/typescript-variable)


## Data Type

> 데이터 타입의 종류
- [boolean](#boolean)
- [number](#number)
- [string](#string)
- [Array](#Array)
- [Tuple](#Tuple)
- [enum](#enum)
- [any](#any)
- [void](#void)
- [null, undefined](#null,undefined)
- [never](#never)
- [type assertions](#type-assertions)

### boolean

```typescript
let myVar: boolean = false;
```

- true, false 키워드 사용
- autoboxing 이 일어나 메소드 실행 가능

```typescript
let myBooleanVar: Boolean = new Boolean(true); 
```

- primitive type 에 대한 생성자 함수
- primitive wrapper object 가 생성

### number
- 정수와 실수를 구분하지 않음 (모두 실수로 취급)
- wrapper 생성자 함수 Number
- ECMAScript 2015부터 2진수 8진수 추가

```typescript
let decimal: number = 6;
```

### string
- 따옴표(')와 쌍따옴표(") 모두 이용가능
- 일반적으로 따옴표(') 이용
- Wrapper 생성자 함수 String
- Template String
  * backquote(`) 를 이용하여 여러 줄에 걸친 문자열 입력 가능
  * embedded expression 사용 가능

```typescript
let myStr: string = "Hello";
let myNumber: number = 100;

let myTemplateString = `this is
a
sample
Text => ${ myNumber + 100 }
myStr : ${ myStr }
`;

console.log(myTemplateString);
```

### Array
- 일반적인 방식
```typescript
let myArr: string[] = ["Hello", "Hi", "안녕하세요"];
```

- Array Interface & Generic
```typescript
let myNumArr: Array<number> = [1, 2, 3, 4];
```

### Tuple
- Array 와 유사한 데이터 타입
- 원소마다 각각 다른 data type 을 허용함

```typescript
let myTuple: [string, number];

myTuple = ["Hello", 100]; // 가능

myTuple = ["Hello", "World"]; // 에러
```

### enum
- C# enum과 동일
- 숫자 대신 친숙한 이름으로 설정하기 위함
- 시작값 명시가능
- 특정 인덱스의 값 명시 가능

```typescript
enum Color { Red, Green, Blue }

let myColor: Color = Color.Red;

console.log(myColor);   // 0 출력
```

### any
- 변수 선언시 data type 을 결정할 수 없는 경우
- 특정 목적 제외시 사용 지양

```typescript
let myVar: any = 100;

myVar = "Hello World!!"; // 가능
myVar = true;            // 가능

let myArr: any[] = [100, "Hello", true]; // 가능
```
### void
- 반환값이 없음
- void type 변수 선언시 null 과 undefined 만 할당 가능

### null & undefined
- null 과 undefined 는 값이자 하나의 type

```typescript
let myNull: null = null;

let myUndefined: undefined = undefined;
```

### never
- 함수의 리턴값으로 주로 사용
- 함수가 무한 루프이거나 무조건 exception 을 일으키는 경우 사용

### type assertions
- 형변환 
- angle-bracket syntax (<>) 또는 as syntax 이용
- any 타입과 이용되는 경우가 많음

```typescript
let myVar: any = "Hello World";

let myVarCount: number = (<string>myVar).length;

myVarCount = (myVar as string).length;

console.log((<number>myVar).toFixed());  // runtime error
```

## Destructuring
- Destructuring Assignment
  * 비구조할당
- 종류
  * [Array](#Array-Destructuring)
  * [Object](#Object-Destructuring)
  
### Array Destructuring
```typescript
let myArr: string[] = ["Hello", "World", "Moon"];

let [first, second, third] = myArr;

[second, first] = [first, second];   // swap 처리

console.log(first);     // "Hello" 출력
console.log(second);    // "World" 출력
console.log(third);     // "Moon" 출력
```
- [first, second, third]
   * Destructuring Array(비구조배열)

```typescript
let myArr: number[] = [1, 2, 3, 4];

let [first, ...others] = myArr;

console.log(first);    // 1 출력
console.log(others);   // [2, 3, 4] 출력 ( 서브배열 )
```

### Object Destructuring

```typescript
let obj = {
    key1 : "Hello World",
    key2 : 100,
    key3 : "TypeScript"
};

let { key1:a, key2:b } = obj;
let { key1, key2 } = obj;
let { a, b } = { a: "Hello World", b: 100 };
let { key1:a, key2:b}: {key1:string, key2:number} = obj; // 데이터 타입 지정
let { key1:a, key2:b = 30 } = obj; // default 지정

console.log(a);    // Hello World 출력
console.log(b);    // 100 출력
```
- obj 의 key1 이 a 에 대입
- [] 가 아닌 {}
- 객체의 key 와 비구조 객체의 변수가 동일하다면 간소화 형태로 이용 가능

```typescript
let obj = {
    myName: "홍길동",
    myAddress: "서울",
    myAge: 30
};

let { myName, ...otherInfo} = obj;

console.log(`이름은 : ${myName}`);
console.log(`나이는 : ${otherInfo.myAge}`);
```
- 서브 객체

### Destructing 응용
- Map
```typescript
let map = new Map();

map.set("myName","홍길동");
map.set("myAddress","서울");
map.set("myAge",30);

for(let [key, value] of map) {
    console.log(`${key} 의 값은 ${value} 입니다.`);
}

for(let [key] of map ) {
    // 모든 key 값만을 출력할 수 있습니다.
    console.log(`${key}`);
}

for(let [,value] of map ) {
    // 모든 value 값만을 출력할 수 있습니다.
    console.log(`${value}`);
}
```
- 함수의 리턴 값
> 배열 리턴

```typescript
function myFunc(): string[] {
    let arr: string[] = [];
    // 로직처리 ...
    arr[0] = "첫번째 결과값";
    arr[1] = "두번째 결과값";

    return arr;
}

let [result1, result2] = myFunc();
```

> 객체 리턴

```typescript
function myFunc(): {result1:string, result2?:number} {

    let obj = {
        result1 : "",
        result2 : 0
    };
    // 로직처리 ...
    obj.result1 = "첫번째 결과값";
    obj.result2 = 100;

    return obj;
}

let {result1:first, result2:second} = myFunc();
```

## References
- [TypeScript 강좌](https://moon9342.github.io/typescript-introduction)
