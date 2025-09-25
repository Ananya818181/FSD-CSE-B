const url="https://api.github.com/users/Ananya818181";
const res=fetch(url);
res.then((resp)=>{
    return resp.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
   console.log(err);
})
.finally(()=>{
    console.log("Finally executed");
})