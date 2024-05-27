// tsc index.js --watch
import User from "./user";
// function welcone(userName,age){
//     return `welcone ${userName} your age is ${age}`
// }

let userName:string = "Ahmed Ali ";
let isAdmin:boolean = false;
let userAge:number=29;
// let users:string[]=["ahmed"];
//tuple is array consists  string and number  and boolean 
//union datatype is x or y 
//generics 
function printNames<T>(names:T[]):T[]
{
    return names;
}
let x = printNames<string>(['ahmed','mohamed','ali']);
let z = printNames<number>([1,2,3]);


let users:User[]=[
    {name:'ahmed',age:20,gender:'male'} ,
    {name:'ahmed',age:20,gender:'male'} ,
    {name:'ahmed',age:20,gender:'male'} ,
    {name:'ahmed',age:20,gender:'male'} ,
    {name:'ahmed',age:20,gender:'male'} ,
    {name:'ahmed',age:20,gender:'male'} ,
]


  