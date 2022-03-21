// npm i -g typescript@2.7.1
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var greeting = function (name) {
    return "hello " + name;
};
var your_name = '철수';
console.log(greeting(your_name));
/*************************************************************
 *  변수 선언
 *************************************************************/
var str = "문자열";
var num = 1;
var bool = true;
var obj = {};
/*************************************************************
 *  타입변환
 *************************************************************/
var obj1 = 1;
var num1 = obj1;
var num2 = obj1;
/*************************************************************
 *  함수 타입 어노테이션
 *************************************************************/
function greet(name) {
    return "\uC548\uB155\uD558\uC138\uC694 " + name + " \uB2D8";
}
var greeting_message = greet('철수');
console.log(greeting_message);
function greet2(name) {
    return "\uC548\uB155\uD558\uC138\uC694 " + name + " \uB2D8";
}
var greeting_message2 = greet2('철수2');
console.log(greeting_message2);
function greet3(name) {
    return "\uC548\uB155\uD558\uC138\uC694 " + (name || "익명") + " \uB2D8";
}
var greeting_message3 = greet3('');
console.log(greeting_message3);
/*************************************************************
 *  함수형
 *************************************************************/
var add = function (a, b) {
    return a + b;
};
function onSuccess(callback) {
    callback("성공");
}
onSuccess(function (value) { return console.log(value); });
/*************************************************************
 * 인터페이스
 *************************************************************/
function printName2(person) {
    console.log(person.name);
}
var person = { id: '1', name: '이현민' };
printName2(person);
function printName3(person) {
    console.log(person.name);
}
var person2 = { id: '1', name: '이현민' };
printName3(person2);
/*************************************************************
 * 클래스
 *************************************************************/
var BaseClass = /** @class */ (function () {
    function BaseClass() {
        this.prop1 = "prop1";
        this.prop2 = "prop2";
        this.prop3 = "prop3";
        this.prop4 = "prop4";
    }
    return BaseClass;
}());
var ExtendClass = /** @class */ (function (_super) {
    __extends(ExtendClass, _super);
    function ExtendClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ExtendClass.prototype, "getProp4", {
        //    get getProp3(){
        //        return this.prop3;
        //    }  
        get: function () {
            return this.prop4;
        },
        enumerable: true,
        configurable: true
    });
    return ExtendClass;
}(BaseClass));
var base = new BaseClass();
console.log(base.prop1);
console.log(base.prop2);
//private
//console.log(base.prop3);
var extend = new ExtendClass();
//protected
//extend.prop4;
extend.getProp4;
/*************************************************************
 * Generic
 *************************************************************/
function identity(arg) {
    return arg;
}
var output = identity("taro");
console.log(output);
var output2 = identity(1);
console.log(output2);
