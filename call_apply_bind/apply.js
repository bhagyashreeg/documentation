var person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  var person1 = {
    firstName:"Bhagya",
    lastName: "shree"
  }
  var details = person.fullName.apply(person1, ["Manglore", "India"]); 
  
  console.log(details);
