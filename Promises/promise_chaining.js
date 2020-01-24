function getUsername(){
    return new Promise((resolve, reject)=>{
        resolve({name: 'Bhagya'});
    });
    
}

function getAge(data){
    return new Promise((resolve, reject)=>{
        data = { ...data, age: 50};
        resolve(data);
    });  
}

function getDepartment(data){

    return new Promise((resolve, reject)=>{
        data = { ...data, department: 'Production'};
        resolve(data);
    });
}

function getEmployeecode(data){
    return new Promise((resolve, reject)=>{
        
        resolve(data);
    });
    
}


function printInfo(data){
    console.log(data);
}

getUsername()
.then(getAge)
.then(getDepartment)
.then(getEmployeecode)
.then(printInfo);