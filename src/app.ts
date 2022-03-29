const outputText:HTMLElement = document.getElementById('atsakymas');
const calculateUnits = document.getElementById('skaiciuoti') as HTMLButtonElement;
const imput = document.getElementById('input') as HTMLInputElement;
const radioToMm = document.getElementById('tomm') as HTMLInputElement;
const radioToInch =  document.getElementById('toinch') as HTMLInputElement;


let calculate = (unitsValue:string) => {
    let ansver:number = 0;
    if (radioToMm.checked) {
        ansver = parseInt(unitsValue) * 25.4;
    }
    if (radioToInch.checked) {
        ansver = parseInt(unitsValue) / 25.4;
    }
    return ansver;
}


calculateUnits.addEventListener('click', () =>{
    if (imput.value != "") {
        outputText.innerHTML = `${calculate(imput.value)}`;
    }
         else {
            outputText.innerHTML = `Iveskite skaiciu`;
        }
       
})


console.log(radioToMm.checked);
