var teamNum = 3;
var teamIn = prompt("What is your team number?", "Please enter the number here");

console.log(teamIn);

if (isNaN(teamIn) || teamIn != teamNum) {
    alert("Sorry, Access Denied!");
}
else {
    var userIn = prompt("Please enter your first name", "Enter here");
    switch (userIn) {
        case "Hardik":
            alert("Welcome! Hardik Parmar");
            break;

        case "Priyank":
            alert("Welcome! Priyank Shah");
            break;

        case "Mahak":
            alert("Welcome! Mahak Patel");
            break;

        case "Kirtan":
            alert("Welcome! Kirtan Patel");
            break;

        default:
            alert("Access Denied!");
            break;
    }
}
