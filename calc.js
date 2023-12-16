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
    <h3>Cesta tam</h3>
    <p>Dopravca: ${dopravcaTam}</p>
    <p>Letenka: ${cenaLetenkaTam}</p>
    <p>Batozina: ${cenaBatozinaTam}</p>
    <p>Poznamka: ${dopravcovia[dopravcaTam].poznamka}</p>
    <p>Poplatky: ${dopravcovia[dopravcaTam].fee}</p>
    <p>Klub: ${jeKlub ? dopravcovia[dopravcaTam].klub : 0}</p>
    <h3>Celkova cena cesta tam: ${cenaTam}</h3>`

    vysledokSpatDiv.innerHTML += `
    <br><h3>Cesta spat</h3>
    <p>Dopravca: ${dopravcaSpat}</p>
    <p>Letenka: ${cenaLetenkaSpat}</p>
    <p>Batozina: ${cenaBatozinaSpat}</p>
    <p>Poznamka: ${dopravcovia[dopravcaSpat].poznamka}</p>
    <p>Poplatky: ${dopravcovia[dopravcaSpat].fee}</p>
    <p>Klub: ${jeKlub ? dopravcovia[dopravcaSpat].klub : 0}</p>
    <h3>Celkova cena cesta tam: ${cenaSpat}</h3>`

    vysledokCelkovyDiv.innerHTML += `
    <br><h3>Celkova cena: <span class="font-bold">${cenaCelkova}</span></h3>`
}

function calculation(data) {
    console.log(data)

    let tam = String(data[0][1]).split(' ')
    let spat = String(data[1][1]).split(' ')
    let cenaBatozinyTam = 0
    let cenaBatozinySpat = 0
    let dopravcaTam = tam[0].toLowerCase()
    let dopravcaSpat = spat[0].toLowerCase()
    let cenaLetenkyTam = tam[1]
    let cenaLetenkySpat = spat[1]
    let jeKlub = false

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

