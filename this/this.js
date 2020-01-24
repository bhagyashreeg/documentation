var person = {
    firstName: "Bhagya",
    lastName : "shree",
    id     : 171713,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  console.log(person.fullName());