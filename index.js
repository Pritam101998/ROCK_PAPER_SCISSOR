const rules_button = document.querySelector(".rule");
const cancel_button = document.querySelector(".cancel");
const rule_box_come = document.querySelector(".rule_box");
const mainx = document.querySelector(".magic");
const rock = document.querySelector(".ROCK");
const paper = document.querySelector(".PAPER");
const scissors = document.querySelector(".SCISSORS");
const selection_points = document.querySelector(".selection_point");
const Point = document.querySelector(".point");
const Point1 = document.querySelector(".point1");
const main1s = document.querySelector(".main1");
const main2 = document.querySelector(".main");
const WIN = document.querySelector(".win");
const Play_again = document.querySelector(".AGAIN");
const next1 = document.querySelector(".next");
const winpage = document.querySelector(".winpic");
const Button = document.querySelector("#button3");
const Replay = document.querySelector(".replay");
const AGAINST_PC = document.querySelector(".ap");
const images = document.querySelector(".image1");
const image22 = document.querySelector(".image2");
const imageElement = document.createElement("img");
const imageElement1 = document.createElement("img");
const imageElement2 = document.createElement("img");
const imageElement11 = document.createElement("img");
const imageElement12 = document.createElement("img");
const imageElement21 = document.createElement("img");
imageElement.src = "./material/icons8-fist-67 1.png";
imageElement1.src = "material/icons8-hand-64 1.png";
imageElement2.src = "material/17911 1.png";
imageElement11.src = "material/icons8-fist-67 1.png";
imageElement12.src = "material/icons8-hand-64 1.png";
imageElement21.src = "material/17911 1.png";
const arr_com = [
  imageElement11,
  imageElement12,
  imageElement21,
  imageElement11,
  imageElement12,
  imageElement21,
  imageElement11,
  imageElement12,
  imageElement21,
  imageElement11,
  imageElement12,
  imageElement21,
  imageElement11,
  imageElement12,
  imageElement21,
  imageElement11,
  imageElement12,
];

Replay.style.display = "none";
// -------------------------------------------------------------------------------------
// RULE_CODE
rules_button.addEventListener("click", () => {
  rule_box_come.style.display = "flex";
  cancel_button.style.display = "flex";
});
cancel_button.addEventListener("click", () => {
  rule_box_come.style.display = "none";
  cancel_button.style.display = "none";
});
// ----------------------------------------------------------------------------------------
next1.style.display = "none";
winpage.style.display = "none";
var k = localStorage.getItem("m");
var t = localStorage.getItem("y");
if (k === null) {
  localStorage.setItem("m", 0);
  Point.innerHTML = localStorage.getItem("m");
}

if (t === null) {
  localStorage.setItem("y", 0);
  Point.innerHTML = localStorage.getItem("y");
}
alert(
  "Hi sir, I have completed this task without implementing a few CSS design elements. I apologize for the oversight."
);
//=======================================rock=========================================>>>>>>>
rock.addEventListener("click", () => {
  selection_points.style.display = "none";
  main1s.style.display = "flex";
  images.innerHTML = "";
  images.appendChild(imageElement);
  const randomIndex = Math.floor(Math.random() * arr_com.length);
  const randomStyle = arr_com[randomIndex];
  image22.innerHTML = "";
  image22.appendChild(randomStyle);
  if (imageElement21 === randomStyle) {
    WIN.innerHTML = "YOU WIN";
    // point_update = point_update + 1;
    // window.localStorage.setItem("x", point_update);
    // var g = localStorage.getItem("x");
    // Point.innerHTML = localStorage.getItem("x");
    // var d = Point.innerHTML;
    // localStorage.setItem("m", d);
    // Point.innerHTML = localStorage.getItem("m");
    // Number(g);

    var h = localStorage.getItem("m");
    Number(h);
    h = Number(h) + 1;
    localStorage.setItem("m", h);
    Point.innerHTML = localStorage.getItem("m");
    next1.style.display = "flex";
    Play_again.style.display = "flex";
    Replay.style.display = "none";
    AGAINST_PC.style.display = "flex";
  } else if (imageElement12 === randomStyle) {
    WIN.innerHTML = "YOU LOST";
    // com_point = com_point + 1;
    // Point1.innerHTML = com_point;
    var o = localStorage.getItem("y");
    Number(o);
    o = Number(o) + 1;
    localStorage.setItem("y", o);
    Point1.innerHTML = localStorage.getItem("y");
    next1.style.display = "none";
    Play_again.style.display = "flex";
    Replay.style.display = "none";
    AGAINST_PC.style.display = "flex";
  } else {
    WIN.innerHTML = "TIE UP";
    next1.style.display = "none";
    Play_again.style.display = "none";
    Replay.style.display = "flex";
    AGAINST_PC.style.display = "none";
    Replay.addEventListener("click", () => {
      mainx.style.display = "flex";
      winpage.style.display = "none";
      main2.style.display = "flex";
      next1.style.display = "none";
      main1s.style.display = "none";
      selection_points.style.display = "flex";
    });
  }
  Play_again.addEventListener("click", () => {
    selection_points.style.display = "flex";
    main1s.style.display = "none";
  });
});
// ==========================================SCISSORS=============================================================>>>>>>>>>>>

scissors.addEventListener("click", () => {
  // d = false;
  selection_points.style.display = "none";
  main1s.style.display = "flex";
  images.innerHTML = "";
  images.appendChild(imageElement2);
  const randomIndex = Math.floor(Math.random() * arr_com.length);
  const randomStyle = arr_com[randomIndex];
  image22.innerHTML = "";
  image22.appendChild(randomStyle);
  if (imageElement12 === randomStyle) {
    WIN.innerHTML = "YOU WIN";
    var h = localStorage.getItem("m");
    Number(h);
    h = Number(h) + 1;
    localStorage.setItem("m", h);
    Point.innerHTML = localStorage.getItem("m");
    // point_update = point_update + 1;
    // Point.innerHTML = point_update;
    next1.style.display = "flex";
    Play_again.style.display = "flex";
    Replay.style.display = "none";
    AGAINST_PC.style.display = "flex";
  } else if (imageElement11 === randomStyle) {
    // WIN.innerHTML = "YOU LOST";
    // com_point = com_point + 1;
    var o = localStorage.getItem("y");
    Number(o);
    o = Number(o) + 1;
    localStorage.setItem("y", o);
    Point1.innerHTML = localStorage.getItem("y");
    Point1.innerHTML = com_point;
    next1.style.display = "none";
    Play_again.style.display = "flex";
    Replay.style.display = "none";
    AGAINST_PC.style.display = "flex";
  } else {
    WIN.innerHTML = "TIE UP";
    next1.style.display = "none";
    Play_again.style.display = "none";
    Replay.style.display = "flex";
    AGAINST_PC.style.display = "none";
    Replay.addEventListener("click", () => {
      mainx.style.display = "flex";
      winpage.style.display = "none";
      main2.style.display = "flex";
      next1.style.display = "none";
      main1s.style.display = "none";
      selection_points.style.display = "flex";
    });
  }
  Play_again.addEventListener("click", () => {
    selection_points.style.display = "flex";
    main1s.style.display = "none";
  });
});
// =============================================PAPER=====================================>>>>>>>>>>>>>>>>>>>>
paper.addEventListener("click", () => {
  // d = false;
  selection_points.style.display = "none";
  main1s.style.display = "flex";
  images.innerHTML = "";
  images.appendChild(imageElement1);
  const randomIndex = Math.floor(Math.random() * arr_com.length);
  const randomStyle = arr_com[randomIndex];
  image22.innerHTML = "";
  image22.appendChild(randomStyle);
  if (imageElement11 === randomStyle) {
    WIN.innerHTML = "YOU WIN";
    var h = localStorage.getItem("m");
    Number(h);
    h = Number(h) + 1;
    localStorage.setItem("m", h);
    Point.innerHTML = localStorage.getItem("m");
    // point_update = point_update + 1;
    // Point.innerHTML = point_update;
    next1.style.display = "flex";
    Play_again.style.display = "flex";
    Replay.style.display = "none";
    AGAINST_PC.style.display = "flex";
  } else if (imageElement21 === randomStyle) {
    WIN.innerHTML = "YOU LOST";
    // com_point = com_point + 1;
    // Point1.innerHTML = com_point;
    var o = localStorage.getItem("y");
    Number(o);
    o = Number(o) + 1;
    localStorage.setItem("y", o);
    Point1.innerHTML = localStorage.getItem("y");
    Play_again.style.display = "flex";
    next1.style.display = "none";
    Replay.style.display = "none";
    AGAINST_PC.style.display = "flex";
  } else {
    WIN.innerHTML = "TIE UP";
    next1.style.display = "none";
    Play_again.style.display = "none";
    Replay.style.display = "flex";
    AGAINST_PC.style.display = "none";
    Replay.addEventListener("click", () => {
      mainx.style.display = "flex";
      winpage.style.display = "none";
      main2.style.display = "flex";
      next1.style.display = "none";
      main1s.style.display = "none";
      selection_points.style.display = "flex";
    });
  }
  Play_again.addEventListener("click", () => {
    selection_points.style.display = "flex";
    main1s.style.display = "none";
  });
});
// =========================================================================================>>>>>>>>>>>>>>>>>>>>
next1.addEventListener("click", () => {
  winpage.style.display = "flex";
  main1s.style.display = "none";
  mainx.style.display = "none";
  next1.style.display = "none";
  Button.addEventListener("click", () => {
    mainx.style.display = "flex";
    winpage.style.display = "none";
    main2.style.display = "flex";
    next1.style.display = "none";
    selection_points.style.display = "flex";
  });
});
// // Check if localStorage is supported by the browser
// if (typeof(Storage) !== "undefined") {
//   // Retrieve the stored result from localStorage
//   var com_point = localStorage.getItem("com_point");

//   // Check if a result exists in localStorage
//   if (com_point !== null) {
//     com_point = com_point + 1;
//     Point1.innerHTML = com_point;
//   } else {
//     // If no result exists, perform a calculation and store the result
//     com_point = com_point + 1;
//     Point1.innerHTML = com_point;
//     // Store the result in localStorage
//     localStorage.setItem("com_point", com_point);
//   }
// }
// localStorage.clear();
Point.innerHTML = localStorage.getItem("m");
Point1.innerHTML = localStorage.getItem("y");
