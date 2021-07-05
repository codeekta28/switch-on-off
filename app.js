console.log("This is app.js fiel");
document.querySelector("#bulb").addEventListener("click",toggle);

function toggle(){
    document.querySelector("#bulb").classList.toggle("bulb-off");
    document.querySelector("#bulb").classList.toggle("bulb-on");
}