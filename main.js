const ps = require("prompt-sync");
const prompt = ps();
let red = "red";
let blue = "blue";
let purple = "purple";
let yellow = "yellow";
let orange = "orange";
let green = "green";

let color = prompt(
  "Enter 2 colors to combine each separated by whitespace or enter color to deconstruct: "
);
if (color.includes(" ")) {
  if (color.includes(red) && color.includes(blue)) {
    console.log(`The color combination creates ${purple}`);
  } else if (color.includes(red) && color.includes(yellow)) {
    console.log(`The color combination creates ${orange}`);
  } else if (color.includes(blue) && color.includes(yellow)) {
    console.log(`The color combination creates ${green}`);
  } else {
    console.log("error");
  }
} else if (!color.includes(" ")) {
  if (color.includes(purple)) {
    console.log(`${color} deconstructed is ${red} and ${blue}`);
  } else if (color.includes(orange)) {
    console.log(`${color} deconstructed is ${red} and ${yellow}`);
  } else if (color.includes(green)) {
    console.log(`${color} deconstructed is ${blue} and ${yellow}`);
  } else {
    console.log("error");
  }
}
