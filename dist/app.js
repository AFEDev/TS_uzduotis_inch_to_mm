const outputText = document.getElementById("atsakymas");
const calculateUnits = document.getElementById("skaiciuoti");
const imput = document.getElementById("input");
const radioToMm = document.getElementById("tomm");
const radioToInch = document.getElementById("toinch");
let calculate = (unitsValue) => {
  let ansver = 0;
  if (radioToMm.checked) {
    ansver = parseInt(unitsValue) * 25.4;
  }
  if (radioToInch.checked) {
    ansver = parseInt(unitsValue) / 25.4;
  }
  return ansver;
};
calculateUnits.addEventListener("click", () => {
  if (imput.value != "") {
    outputText.innerHTML = `${calculate(imput.value)}`;
  } else {
    outputText.innerHTML = `Iveskite skaiciu`;
  }
});
console.log(radioToMm.checked);
