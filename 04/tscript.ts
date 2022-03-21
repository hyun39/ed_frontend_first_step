// npm i -g typescript@2.7.1

const greeting = function (name:string) : string{
    return `hello ${name}`;
}

const your_name = '철수';

console.log(greeting(your_name));


/*************************************************************
 *  변수 선언
 *************************************************************/


let str:string = "문자열";
let num:number = 1;
let bool:boolean = true;
let obj:any = {}


/*************************************************************
 *  타입변환
 *************************************************************/


let obj1:any = 1;
let num1:number = <number>obj1;
let num2:number = obj1 as number;

/*************************************************************
 *  함수 타입 어노테이션
 *************************************************************/


function greet(name:string) : string {
    return `안녕하세요 ${name} 님`;
}

const greeting_message =  greet('철수');
console.log(greeting_message);


function greet2(name:string)  {
    return `안녕하세요 ${name} 님`;
}

const greeting_message2 =  greet2('철수2');
console.log(greeting_message2);

function greet3(name?:string)  {
    return `안녕하세요 ${name || "익명"} 님`;
}

const greeting_message3 =  greet3('');
console.log(greeting_message3);

/*************************************************************
 *  함수형
 *************************************************************/

const add = (a:number, b:number) : number =>{
    return a+b;    
}

function onSuccess(callback:(vale:string) => void){
    callback("성공")
}

onSuccess(value=>console.log(value))



/*************************************************************
 * 인터페이스
 *************************************************************/

function printName2(person:{name:string}){
    console.log(person.name)
}


let person = {id:'1',name:'이현민'};

printName2(person);

interface PersonInterface{
    name : String
}


function printName3(person:PersonInterface)
{
    console.log(person.name);
}

let person2 = {id:'1',name:'이현민'};
printName3(person2);



/*************************************************************
 * 클래스   
 *************************************************************/

class BaseClass{

    prop1 = "prop1";

    public prop2 = "prop2";

    private prop3 = "prop3";

    protected prop4 = "prop4";

}

class ExtendClass extends BaseClass{

//    get getProp3(){
//        return this.prop3;
//    }  

    get getProp4(){
        return this.prop4;
    }
}

let base = new BaseClass();

console.log(base.prop1);
console.log(base.prop2);
//private
//console.log(base.prop3);


let extend = new ExtendClass();
//protected
//extend.prop4;
extend.getProp4;

/*************************************************************
 * Generic
 *************************************************************/

function identity<T>(arg:T): T {
    return arg
}

let output = identity(<string>"taro");
console.log(output);

let output2 = identity(<number>1);
console.log(output2);


class genericClass<T>{
    constructor(public value : T){

    }
}

let obj2 = new genericClass<string>("문자열");

interface GenericInterface<T>{
    value:T;
}

