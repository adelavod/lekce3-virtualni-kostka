// tady je místo pro náš program
// podmínky na IF, ELSE
let salary = 40000;
if (salary > 40000) {
    console.log("Pěkný plat!")
} else {
    console.log("Řekni si o víc!")
}

function hodKostkou() {
    let cislo;
    cislo = Math.ceil(Math.random() * 6);

    console.log(cislo); 
    let zprava = document.querySelector("#zprava");
    let obrazek = document.getElementById('kostka');

    if (cislo==6){
        zprava.innerHTML = "Blahopřeji, vyhrál jsi!";
        obrazek.setAttribute('src', 'obrazky/6.png');
    }
    else {
        zprava.innerHTML="Bohužel, hodil jsi "+ cislo+". Házej znovu!"
        obrazek.setAttribute('src', 'obrazky/'.concat(cislo,".png"));
    }

    
    
}
