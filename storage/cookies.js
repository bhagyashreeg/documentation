document.cookie = "hello";
console.log(document.cookie)

let rmvdCookie = document.cookie = "hello; expires=Sat, 25 Jan 2020 10:12:00";

var x = document.cookie = "hello";
console.log(rmvdCookie)