var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName:"Bhagya",
    lastName: "Shree"
  }
  var person2 = {
    firstName:"Shilpa",
    lastName: "Shree"
  }
  var x = person.fullName.call(person1); 
  //document.getElementById("demo").innerHTML = x; 
  console.log(x);