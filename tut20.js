console.log("This is tut20.js");
let impArr = ["Python", "Java", "C++"]
localStorage.setItem("Name", "hdmtp");
localStorage.setItem("channel", "youtube.com/hdmtp");
localStorage.setItem("language", JSON.stringify(impArr));
// localStorage.clear();
localStorage.removeItem("Name");

let name = JSON.parse(localStorage.getItem("language"));
console.log(name);

sessionStorage.setItem("sessionName", "shdmtp");
sessionStorage.setItem("sessionchannel", "syoutube.com/hdmtp");
sessionStorage.setItem("sessionlanguage", JSON.stringify(impArr));