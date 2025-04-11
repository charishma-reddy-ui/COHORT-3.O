function greet(firstName:any){
    console.log(`Hello, ${firstName}!`);
}
greet("John");
interface User{
    firstName:string;
    lastName:string;
    age:number;

}
function filterUsers(users:User[]){
    let ans = []
    for (let i =0;i<users.length;i++){
        if (users[i].age>18){
            ans.push(users[i])
        }
    }
    return ans
}
let users = [
    {firstName:"John",lastName:"Doe",age:25},
    {firstName:"Jane",lastName:"Doe",age:17},
    {firstName:"Jim",lastName:"Beam",age:30}
]
let filteredUsers = filterUsers(users)
console.log(filteredUsers)
    

