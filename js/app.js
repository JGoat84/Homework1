// Task 1
// -------------------------------------------------

// const mushrooms = ["porcini", "oyster", "shitake"];
// var mushrooms = ["porcini", "oyster", "shitake"];
// // mushrooms[2]="closed cup";
// // mushrooms.push("portobello")
// // let mushrooms[2] = "reishi"

// // let pick = mushrooms.pop();


// let mushrooms2 = mushrooms.toString();
// let mushrooms3 = mushrooms2.replace("oyster", "portobello")
// console.log(mushrooms2)
// console.log(mushrooms3)

// -------------------------------------------------
// Task 2
// -------------------------------------------------

// let a = 3;
// let b = 4;
// let y = a*b;

// console.log(y)

// -------------------------------------------------
// Task 3 I expanded the "Dogyears" scenario to cover people < 24 and 9 through a couple of additional IF statements
// -------------------------------------------------

let humanage = 24;

let firstyear = 15;
let secondyear = 9;

// FOR PEOPLE < 15 YEARS OLD
if (humanage <= firstyear) {
    dogyears = humanage/firstyear
}
// FOR PEOPLE > 15 YEARS OLD BUT 24 AND UNDER
else if (humanage <= firstyear+secondyear && humanage >firstyear) {
    dogyears = (humanage - firstyear)/secondyear +1
}
// FOR PEOPLE OVER 24 YEARS OLD
else dogyears = (humanage-firstyear-secondyear)/5+2

// console.log(dogyears)
console.log("i am", humanage, "years old and", dogyears, "dogyears old")

// -------------------------------------------------
//Task 4 - IGOT STUCK ON THIS
// -------------------------------------------------

// var food = ['Pizza', 'spaghetti', 'Lasagna', 'garlic bread']

// let menu = "";
// for (food i = 0; i < food.length; i++)

// {
// "<table>"
// "</td>""
// menu += food[i] "<tr>""
//             "<td>" food[i] 
//          </tr>
// "</table"
// }
// document.getElementById("menu")



