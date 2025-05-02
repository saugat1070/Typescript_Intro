// let userName: string = "saugat giri";
// const nameLength: number = userName.length;
// console.log(nameLength);

let myName = true ? 100 : 200;
console.log(myName);

// let number = [1,2,3];
let numbers : number[] = [1,2,3];
console.log(numbers);

let userDirection : 'up' | 'down' | 'right' | 'left' = 'up';
console.log(userDirection);

//object

interface UserType{
    name : string,
    age : number,
    city : string | number
}

let User : UserType = {
name : "saugat",
age : 19,
city : 23
}
// console.log(User)

interface Me{
    name : string,
    age : number,
    isNepali : boolean
}

let me : Me = {
    name : "Saugat",
    age : 19,
    isNepali : true
}
// console.log(me)



enum Position{
    Developer= "developer",
    Desgineer = "desingeer",
    ProjectLead="project lead",
}
interface Employee extends Me {
    position : Position
}

let employee : Employee = {
    name : "Saugat",
    age : 19,
    isNepali : true,
    position : Position.Developer
}
// console.log(employee)

type haha = string | number | boolean
let userId: haha = "k cha hajur";

let haha: any = [2,3]

type PersonalDetails = {
    name : string,
    role : Position
}

type Language = {
    language : string,
}

type SoftwareDeveloper = PersonalDetails & Language;

let details : SoftwareDeveloper = {
    name : "saugat",
    role : Position.ProjectLead,
    language : "English"

}

console.log(details)

//function 
function sum(a:number,b:number){
    return a+b;
}

let num = sum(2,3);
// console.log(num)

//generics 
function sum1(a:number,b:number){
    return a+b;
}

function addTwoStr(str1:string,str2:string):string{
    return str1+str2;
}

let str = addTwoStr("saugat","giri")
// console.log(str);

function addTwoBool(first:boolean,second:boolean){
    return first && second;
}

function addJPani1<T>(data1:T,data2:T){
    console.log("haha");
}
addJPani1<string>("saugat","giri")
addJPani1<number>(1,2);

function addJPani2<T,U>(data1:T,data2:U){
    console.log("haha");
}

addJPani2<string,number>("saugat",1);

interface Data<T,U>{
    first:T,
    second:U
}

let data:Data<string,number> = {
    first : "ssaugat",
    second : 123
}