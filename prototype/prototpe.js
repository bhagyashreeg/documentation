function Employee(first,last,desig,age){
    this.firstname = first;
    this.lastname = last;
    this.designation = desig;
    this.age = age; 
}

Employee.prototype.nationality = "English";
var frnd1 = new Employee("Joy","ram","finance",30);
var frnd2 = new Employee("Pajj","kumar","computer",23);

//document.getElementById("docu").innerHTML = "The Nationality of my friend " + frnd2.firstname + " is " + frnd2.nationality;
console.log("The Nationality of my friend " + frnd2.firstname + " is " + frnd2.nationality);
