let nums=[1,5,3,2,6,9,7,8,21,20,22,31,32];
let n=nums.length;
console.log(nums.sort());
for(let i=0;i<n;i++)
  {
for (let j=i+1;j<n;j++)
  {
    if(nums[i]>nums[j])
      {
        let temp=nums[i];
        nums[i]=nums[j];
        nums[j]=temp;
      }
  }
  }

console.log(nums);
