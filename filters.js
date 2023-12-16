const letyClasses = "max-w-fit transition ease-in-out delay-150 px-5 py-3 rounded-lg bg-[#02587D] shadow-base-100 shadow-md hover:bg-[#0A5D75] bg-opacity-100  font-bold font-dmsans text-sm"
const tam = document.getElementById("tam")
const spat = document.getElementById("spat")
const batozina = document.getElementById("batozina")
const klubWizz = document.getElementById("klub")
const formLety = document.getElementById("volba")
 

function prehladLetov() {
    data = sortData(data, "datum")
    localStorage.removeItem("letenky")
    localStorage.setItem("letenky", JSON.stringify(data))
    storageData = JSON.parse(localStorage.getItem("letenky"))
    const storage = JSON.parse(localStorage.getItem("letenky")) || [{"miesto":"Vieden","datum":"2024-01-15","cas":"16:15","cena":"30","dopravca":"Ryanair"},{"miesto":"Vieden","datum":"2024-01-16","cas":"06:10","cena":"25","dopravca":"Wizzair"},{"miesto":"Vieden","datum":"2024-01-16","cas":"17:05","cena":"27","dopravca":"Ryanair"},{"miesto":"Vieden","datum":"2024-01-17","cas":"15:10","cena":"19","dopravca":"Wizzair"},{"miesto":"Vieden","datum":"2024-01-17","cas":"16:50","cena":"25","dopravca":"Ryanair"},{"miesto":"Vieden","datum":"2024-01-18","cas":"14:25","cena":"40","dopravca":"Wizzair"},{"miesto":"Vieden","datum":"2024-01-18","cas":"17:30","cena":"17","dopravca":"Ryanair"},{"miesto":"Vieden","datum":"2024-01-19","cas":"13:10","cena":"27","dopravca":"Ryanair"},{"miesto":"Barcelona","datum":"2024-01-24","cas":"19:45","cena":"47","dopravca":"Ryanair"},{"miesto":"Barcelona","datum":"2024-01-25","cas":"17:35","cena":"29","dopravca":"Wizzair"},{"miesto":"Barcelona","datum":"2024-01-25","cas":"19:30","cena":"25","dopravca":"Wizzair"},{"miesto":"Barcelona","datum":"2024-01-25","cas":"20:35","cena":"20","dopravca":"Ryanair"}]
    tam.innerHTML = ""
    spat.innerHTML = ""

    storage.filter(let => (let.miesto === "Vieden")).forEach(function (item, index) {
        var radioBtn = document.createElement("input");
        radioBtn.type = "radio";
        radioBtn.name = "tam"; // Set a common name for all radio buttons
        radioBtn.value = `${item.dopravca} ${item.cena}`
        radioBtn.id = `${item.miesto} ${item.datum} ${item.cas} ${item.dopravca}  ${item.cena} `
        
        var label = document.createElement("label");
        label.appendChild(document.createTextNode(`${item.miesto} ${item.datum} ${item.cas} ${item.dopravca}  ${item.cena} `));
        label.setAttribute("for", `${item.miesto} ${item.datum} ${item.cas} ${item.dopravca}  ${item.cena} `);
        
        tam.appendChild(radioBtn);
        tam.appendChild(label);
        tam.appendChild(document.createElement("br"));
        
        if (index === 0) {
            radioBtn.required = true; // Set the first radio button as required
        }
    })
    storage.filter(let => (let.miesto === "Barcelona")).forEach(function (item, index) {
        
        var radioBtn = document.createElement("input");
        radioBtn.type = "radio";
        radioBtn.name = "spat"; // Set a common name for all radio buttons
        radioBtn.value = `${item.dopravca} ${item.cena}`
        radioBtn.id = `${item.miesto} ${item.datum} ${item.cas} ${item.dopravca}  ${item.cena} `
        
        var label = document.createElement("label");
        label.appendChild(document.createTextNode(`${item.miesto} ${item.datum} ${item.cas} ${item.dopravca}  ${item.cena} `));
        label.setAttribute("for", `${item.miesto} ${item.datum} ${item.cas} ${item.dopravca}  ${item.cena} `);
        
        spat.appendChild(radioBtn);
        spat.appendChild(label);
        spat.appendChild(document.createElement("br"));
        
        if (index === 0) {
            radioBtn.required = true; // Set the first radio button as required
        }
    })
}
    
    formLety.addEventListener("submit", (event) => {
        event.preventDefault()
        const formData = new FormData(formLety)
        const data = ([...formData])
        vysledokTamDiv.innerHTML = ''
        vysledokSpatDiv.innerHTML = ''
        vysledokCelkovyDiv.innerHTML = ''
        calculation(data)
        
        
    })