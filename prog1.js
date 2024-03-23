const device={
  id:"",
  mfname:"",
  mfyear:"",
  price:""
  
}

console.log(device);

const cellphone=device;
const monitor=device;

cellphone["id"]=1;
cellphone["mfname"]="Samsung";
cellphone["mfyear"]=2023;
cellphone["price"]=22500;
console.log(cellphone);
console.log(cellphone["mfname"]);
console.log(cellphone["price"]);

monitor.id=2;
monitor.mfname="Intex";
monitor.mfyear=2022;
monitor.price=4500;
console.log(monitor);
console.log(monitor.id);
console.log(monitor.mfname);
