console.log("This is tutorial 17 on events in javascript");
document.getElementById("heading").addEventListener("click", function (e) {
    let varialble;
    console.log("You have clicked the heading");
    varialble = e.target;
    varialble = e.target.className;
    varialble = Array.from(e.target.classList);

    variable = e.target.id;
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;
    console.log(varialble);
    console.log(e);
    // location.href = "//my1login.com";

})
document.getElementById("heading").addEventListener("mouseover", function (q) {
    console.log("you just hovered on the heading",q.offsetX);
})