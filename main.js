const getResidentsBtn = document.querySelector("button")

const buttonClicked = () => {
    console.log("button clicked")
    axios.get("https://swapi.dev/api/planets/?search=alderaan").then((res) => {
        console.log(res.data.results[0].residents)
        residents = res.data.results[0].residents
        for (let i = 0; i < residents.length; i++) {
            axios.get(`${residents[i]}`).then((res) => {
                console.log(res.data)
                const h2 = document.createElement('h2')
                h2.textContent = `${res.data.name}`
                document.body.appendChild(h2)
            })
        }
    }).catch((err) =>
    {
        console.log(err)
    })
}

getResidentsBtn.addEventListener("click", buttonClicked)