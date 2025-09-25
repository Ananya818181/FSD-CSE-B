const URL = "https://dummyjson.com/users?limit=5";
const pr= fetch(URL);
pr.then((response)=>{
return response.json();
})

// .then((data)=>{
//   console.log("name=",data.users[0].firstName);
//   console.log("email=",data.users[0].email);
//   console.log("ip=",data.users[0].ip);
//   console.log("macAddress=",data.users[0].macAddress);
// })

.then((data)=>{
    data.users.forEach(element => {
        console.log("name=",element.firstName);
        console.log("email=",element.email);
        console.log("ip=",element.ip);
        console.log("macAddress=",element.macAddress);
    });
})

.catch((err)=>
{
    console.log("ERROR MSG: ", err);
    
})