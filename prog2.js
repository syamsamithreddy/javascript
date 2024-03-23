const device={
  id:"1",
  mfname:"Samsumg",
  mfyear:"2023",
  price:"45000",
    showPrice:function()
  {
    console.log(this.price);
}
  
}
const myDeivce=Object.create(device);

device.price=45500;

console.log(myDeivce);
