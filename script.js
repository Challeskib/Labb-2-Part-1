const button = document.getElementById("secretButton");
button.addEventListener("click", function () {
  document.body.style.background = "pink";
  console.log("You clicked the button!");
});

const button2 = document.getElementById("secretButton2");
button2.addEventListener("click", function () {
  document.body.style.background = "white";
  console.log("You clicked the button!");
});

function openLink() {
  window.open("#popup1");
}

const elit = [1, 3, 3, 7];
let rightAnswer = [];
let counter = 0;

const kombination = document.getElementById("secretKey");

kombination.addEventListener("keypress", function (event) {
  if (event.key == elit[counter]) {
    rightAnswer.push(event.key);
    console.log(rightAnswer);
    counter++;
  } else {
    counter = 0;
    rightAnswer.length = 0;
  }
  if (counter == 4) {
    console.log("GZ");
    openLink();
    counter = 0;
    rightAnswer.length = 0;
  }
});
