function clickCounter(){
if (typeof(Storage) !== "undefined") {
    
    sessionStorage.setItem("Session Name", "This is Demo_session");
    
    console.log(sessionStorage.getItem("lastname")); 
    console.log(typeof(Storage))
  } else {
    console.log("Sorry your browser does not support Web Storage...");
  }
}
console.log(clickCounter());