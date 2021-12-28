//dom elements
// const actionButton = document.querySelector("#action_button");
const radio1 = document.querySelector("#radio1");
const radio2 = document.querySelector("#radio2");
const radio3 = document.querySelector("#radio3");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const inputs = document.querySelectorAll(".input");

//methods

//generate random number between 1 and 10 exclusive
const genRandom = () => Math.floor(Math.random() * 9) + 1;

//button event listener actions depend on radio button selected.
//radio2, radio3 require input1 and inpu2 fields to be filled
document.querySelector("#action_button").addEventListener("click", () => {
  if (radio1.checked) {
    for (let el of inputs) {
      el.value = String(genRandom());
    }
  } else if (radio2.checked) {
    if (!input1.value || !input2.value) {
      alert("input 1 and input 2 fields required");
    } else {
      input3.value = parseInt(input1.value) + parseInt(input2.value);
    }
  } else if (radio3.checked) {
    if (!input1.value || !input2.value) {
      alert("input 1 and input 2 fields required");
    } else {
      input3.value = input1.value + input2.value;
    }
  } else {
    alert("select a radio button");
  }
});
