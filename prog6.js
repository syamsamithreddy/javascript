const person={
  id:1,
  name:"SrinivasaRao",
  course:"JavaScript",
 
}
 function showPersonDetails(...subjects)
  {
  console.log("Name is " + this.name + " Course is " + this.course + " He Teaches " + subjects);
   }

showPersonDetails.apply(person,["HTML","JavaScript","CSS","ReactJs","NOdeJs","MYSQl"]);
