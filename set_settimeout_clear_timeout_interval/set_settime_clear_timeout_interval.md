**Set Interval, Get interval, Clear Interval, Cleartimeout Interval**

# ----------------------------

**Set Interval**
* Set interval() will call the function at the given intervals(milliseconds)
* It won't stop until we give the clearInterval() or close the window
* Syntax : 
    setInterval(function(){ alert("Hello"); }, 3000);

# ----------------------------------

**Set Timeout interval**
* Syntax :
    setTimeout(function(){ alert("Hello"); }, 3000)

* setTimeout() calls a function after specified number of milliseconds.

# --------------------------------

**Clear Interval**
* Clear interval method will clears the time given by the set interval().
* ID returned by the setinterval() is used as parameter.
* By this we can stop the Intervals
* Syntax :
    myVar = setInterval("javascript function", milliseconds);

# -------------------------------------

**Clear Timeout interval**
* syntax :
  myVar = setTimeout("javascript function", milliseconds);

* clearTimeout() clears a timer set with the setTimeout().