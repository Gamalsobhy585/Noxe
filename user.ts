 interface User 
{
    name:String;
    age:number;
    gender:string;
    id?:number;
    welcome?(name:string):string
}
interface User{
    salary?:number; 
}
export default User;

