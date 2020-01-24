var words = { 
    name : "Bhagya", 
    printFunc: function(){ 
       document.write(this.name);} 
       } 
         
      var printFunc2= words.printFunc.bind(words); 
      printFunc2();
      console.log(words)