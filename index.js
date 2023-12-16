
const form = document.getElementById("form-letenky")
const datum = document.getElementById("datum")
const miesto = document.getElementById("odlet-z")
const cas = document.getElementById("cas")
const cena = document.getElementById("cena")
const dopravca = document.getElementById("dopravca")
const divData = document.getElementById("div-data")

function sortData(data, key) {
    let notSorted = true
    while (notSorted) {
        notSorted = false
        for (i = 0; i < (data.length - 1); i++) {
            if (data[i][key] > data[i+1][key]) {
                [data[i], data[i+1]] = [data[i+1], data[i]]
                notSorted = true
            }
        }
    }
    return data
}

let data = [];
let storageData = JSON.parse(localStorage.getItem("letenky")) || [{"miesto":"Vieden","datum":"2024-01-15","cas":"16:15","cena":"30","dopravca":"Ryanair"},{"miesto":"Vieden","datum":"2024-01-16","cas":"06:10","cena":"25","dopravca":"Wizzair"},{"miesto":"Vieden","datum":"2024-01-16","cas":"17:05","cena":"27","dopravca":"Ryanair"},{"miesto":"Vieden","datum":"2024-01-17","cas":"15:10","cena":"19","dopravca":"Wizzair"},{"miesto":"Vieden","datum":"2024-01-17","cas":"16:50","cena":"25","dopravca":"Ryanair"},{"miesto":"Vieden","datum":"2024-01-18","cas":"14:25","cena":"40","dopravca":"Wizzair"},{"miesto":"Vieden","datum":"2024-01-18","cas":"17:30","cena":"17","dopravca":"Ryanair"},{"miesto":"Vieden","datum":"2024-01-19","cas":"13:10","cena":"27","dopravca":"Ryanair"},{"miesto":"Barcelona","datum":"2024-01-24","cas":"19:45","cena":"47","dopravca":"Ryanair"},{"miesto":"Barcelona","datum":"2024-01-25","cas":"17:35","cena":"29","dopravca":"Wizzair"},{"miesto":"Barcelona","datum":"2024-01-25","cas":"19:30","cena":"25","dopravca":"Wizzair"},{"miesto":"Barcelona","datum":"2024-01-25","cas":"20:35","cena":"20","dopravca":"Ryanair"}]

data = [...storageData]



prehladLetov()
// if (data) {
        
//    data.forEach(item => ( divData.innerHTML += `<p>${item.miesto} ${item.datum} ${item.cas} ${item.cena} ${item.dopravca} <p>`))
// }


form.addEventListener("submit", (e) => {
    e.preventDefault()
    data.push({
        miesto: miesto.value,
        datum: datum.value,
        cas: cas.value,
        cena: cena.value,
        dopravca: dopravca.value
    })
    miesto.value = ""
    dopravca.value=""

    data = sortData(data, "datum")
   
    console.log(data)
    localStorage.removeItem("letenky")
    localStorage.setItem("letenky", JSON.stringify(data))
    storageData = JSON.parse(localStorage.getItem("letenky"))

    prehladLetov()
    // if (storageData) {
    //     divData.innerHTML = ""
    //     storageData.forEach(item => ( divData.innerHTML += `<p>${item.miesto} ${item.datum} ${item.cas} ${item.cena} ${item.dopravca} <p>`))
    // }
    
})



