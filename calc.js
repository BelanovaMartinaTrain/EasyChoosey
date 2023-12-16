let dopravcovia = {
wizzair : {
    batozina: 52,
    poznamka: "batozina je aj s priority",
    fee: 16,
    klubBatozina: 5,
    klubLetenka: 10,
    klub: 17.5
},

ryanair : {
    batozina: 26,
    poznamka: "batozina je aj s priority",
    fee: 0,
    klubBatozina: 0,
    klubLetenka: 0, 
    klub: 0
}}

const vysledokTamDiv = document.getElementById("vysledok-tam")
const vysledokSpatDiv = document.getElementById("vysledok-spat")
const vysledokCelkovyDiv = document.getElementById("vysledok-celkovy")


function celkovaCena(dopravcaTam, dopravcaSpat, cenaLetenkyTam, cenaLetenkySpat, cenaBatozinyTam, cenaBatozinySpat, jeKlub) {
    console.log(cenaBatozinyTam)
    let klubWizzTam = jeKlub ? dopravcovia[dopravcaTam].klubBatozina : 0
    let klubWizzSpat = jeKlub ? dopravcovia[dopravcaSpat].klubBatozina : 0
    let cenaLetenkaTam = parseInt(cenaLetenkyTam) - (jeKlub ? dopravcovia[dopravcaTam].klubLetenka : 0)
    let cenaLetenkaSpat =  parseInt(cenaLetenkySpat) - (jeKlub ? dopravcovia[dopravcaSpat].klubLetenka : 0)
    let cenaBatozinaTam = (cenaBatozinyTam ? (cenaBatozinyTam - klubWizzTam): 0)
    let cenaBatozinaSpat = (cenaBatozinySpat ? (cenaBatozinySpat - klubWizzSpat): 0)
    let cenaTam = cenaLetenkaTam + cenaBatozinyTam + dopravcovia[dopravcaTam].fee + (jeKlub ? dopravcovia[dopravcaTam].klub : 0)
    let cenaSpat = cenaLetenkaSpat +  cenaBatozinySpat + dopravcovia[dopravcaSpat].fee + (jeKlub ? dopravcovia[dopravcaSpat].klub : 0)
    let cenaCelkova = cenaTam + cenaSpat

    vysledokTamDiv.innerHTML += `
    <h3 class="font-bold mb-2">Cesta tam</h3>
    <div class="grid grid-cols-2 justify-items-stretch text gap-x-2">
        <p>Dopravca:</p><p> ${dopravcaTam}</p>
        <p>Letenka:</p><p> ${cenaLetenkaTam}</p>
        <p>Batozina:</p><p> ${cenaBatozinaTam}</p>
        <p>Poplatky:</p><p> ${dopravcovia[dopravcaTam].fee}</p>
        <p>Klub:</p><p> ${jeKlub ? dopravcovia[dopravcaTam].klub : 0}</p>
        <h3 class="font-semibold ">Celkova cena cesta tam:</h3><h3 class="font-semibold"> ${cenaTam}</h3>
    </div>`

    //<p>Poznamka:</p><p> ${dopravcovia[dopravcaTam].poznamka}</p>

    vysledokSpatDiv.innerHTML += `
    <h3 class="font-bold mb-2 mt-4 md:mt-0 2xl:mt-4">Cesta spat</h3>
    <div class="grid grid-cols-2 justify-items-stretch text gap-x-2">
        <p>Dopravca:</p><p> ${dopravcaSpat}</p>
        <p>Letenka:</p><p> ${cenaLetenkaSpat}</p>
        <p>Batozina:</p><p> ${cenaBatozinaSpat}</p>
        <p>Poplatky:</p><p> ${dopravcovia[dopravcaSpat].fee}</p>
        <p>Klub:</p><p> ${jeKlub ? dopravcovia[dopravcaSpat].klub : 0}</p>
        <h3 class="font-semibold ">Celkova cena cesta spat:</h3><h3 class="font-semibold"> ${cenaSpat}</h3>
    </div>`;

    //      <p>Poznamka:</p><p> ${dopravcovia[dopravcaSpat].poznamka}</p>

    vysledokCelkovyDiv.innerHTML += `
    <div class="grid grid-cols-2 justify-around mt-4 gap-x-2 md:mt-0 2xl:mt-4"><h3 class="font-bold">Celkova cena: </h3><span class="font-bold ">${cenaCelkova}</span></div>`
}

function calculation(data) {
    console.log(data)
    let vysledokDiv = document.getElementById("vysledok")
    let tam = String(data[0][1]).split(' ')
    let spat = String(data[1][1]).split(' ')
    let cenaBatozinyTam = 0
    let cenaBatozinySpat = 0
    let dopravcaTam = tam[0].toLowerCase()
    let dopravcaSpat = spat[0].toLowerCase()
    let cenaLetenkyTam = tam[1]
    let cenaLetenkySpat = spat[1]
    let jeKlub = false

    vysledokDiv.classList.remove("invisible")

    if (data.length >= 3 &&  data[2][0] === "batozina" ) {
        cenaBatozinyTam = dopravcovia[dopravcaTam].batozina 
        cenaBatozinySpat = dopravcovia[dopravcaSpat].batozina
    } 

    for (i = 0; i < data.length; i++) {
        if (data[i][0] === "klub") {
            jeKlub = true
        }
    }
    
    celkovaCena(dopravcaTam, dopravcaSpat, cenaLetenkyTam, cenaLetenkySpat, cenaBatozinyTam, cenaBatozinySpat, jeKlub)
}

