const nums=[1,2,3,4,5,6];
let x;
for (x in nums)
{
  console.log(x);
}

nums.map(element=>console.log(element));

 x=nums.map(element=>{
  return(element>3)
})

console.log(x);

 x=nums.filter(element=>{
  return(element>3)
})
 
 console.log(x);
