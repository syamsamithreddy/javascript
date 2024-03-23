const person={
  id:1,
  name:"SrinivasaRao",
  course:"JavaScript",
 
}
 function showPersonDetails(city)
  {
  console.log("Name is " + this.name + " Course is " + this.course + " He is LIve in " + city);
   }

showPersonDetails.call(person,"Ongole");
