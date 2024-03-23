const device={
  id:"1",
  mfname:"Samsumg",
  mfyear:"2023",
  price:"45000",
  showPrice:function(msg,msg1)
  {
    console.log(msg + this.mfname + " Price " + this.price + msg1);
  },
  priceWithTax:function()
  {
    return parseInt(this.price)+(parseInt(this.price*18)/100);
  }
  
  
}


device.showPrice("To Day "," on 2023");

let withTax=device.priceWithTax();
console.log(withTax);
