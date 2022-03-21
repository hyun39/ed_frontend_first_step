const { timeStamp } = require("console");

/*************************************************************
 *  변수 할당 #1
 *************************************************************/
let name = '익명';
name = "철수";
console.log(name)


// 재 정의할수 없다는 에러가 발생한다.
//let name = "철수";


/*************************************************************
 *  변수 할당 #2
 *************************************************************/
const id = 1;

// 아래와 같이 재정의를 하면 에러가 발생을 한다.
// id = 2;

// const id  = 3;

console.log(id)



/*************************************************************
 *  Template leteral
 *************************************************************/

user_name = "이현민"
console.log(`${user_name} 님이 방문을 했습니다`);



/*************************************************************
 *  디폴트 인자
 *************************************************************/

function joinChannel(name = '익명'){
    console.log(`${name} 님이 입장을 했습니다.`);
}


joinChannel();

/*************************************************************
 *  화살표 함수
 *************************************************************/

const add = function (a, b){
    return a+b;
}

console.log("답은 :" + add(2,3));

const add2 =  (a, b) => {
    return a+b;
}

console.log("답은 :" + add2(2,2));

const add3 =  (a, b) => a+b;

console.log("답은 :" + add3(2,1));


/*************************************************************
 *  MAP 함수
 *************************************************************/

const events = [1, 2, 4, 5, 6]

const add4 = events.map(function(v){return v+1});

console.log("답은 :" + add4);

const add5 = events.map(v=>v+1);



console.log("답은 :" + add5);

/*************************************************************
 *  this 예약어
 *************************************************************/


const person  =  {

    name : "철수",

    lazy_hello : function() {
        setTimeout(function(){
            console.log(`hello ${this.name} 님`);
        },1000);
    }
};

console.log(person.name);

const person2  =  {

    name : "철수2",

    lazy_hello : function() {
        setTimeout(function(){
            console.log(`hello ${this.name} 님`);
        }.bind(this),1000);
    }
};

console.log(person2.name);


/*************************************************************
 *  클래스 정의
 *************************************************************/

 // 5 이전

 var Person = function(id, name){
     this.id = id;
     this.name = name;
 };

Person.prototype.printName  = function(){
    console.log(this.name)
}

var p = new Person(1,"첫번쨰");
p.printName();

// 2015부터

class Person2 {

    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    sendMessage(){
        console.log(this.name)
    }
}

var p2 = new Person2(2,"두번째");

p2.sendMessage();

class Participant extends Person2{

    constructor(id, name, channel){
        super(id, name);
        this.channel = channel;
    }

    sendMessage(message){

        console.log(`${this.name}님이 ${this.channel} 채널에 ${message} 을 남겼습니다.` );
    }
}

var p3 = new Participant(3,"세번째","채널");

p3.sendMessage("메시지");



/*************************************************************
 *  다른 파일로 부터 로딩
 *************************************************************/

//import { Person3 } from './lib/Person3.js';


//var p = new Person3(10, "열번째");
//p.printName();




