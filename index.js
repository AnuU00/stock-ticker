import getStockData from "./fakeStockAPI.js"

let oldPrice = null

function renderStockTicker(stockData) {
    const stockDisplayName = document.getElementById("name")
    const stockDisplaySymbol = document.getElementById("symbol")
    const stockDisplayPrice = document.getElementById("price")
    const stockDisplayPriceIcon = document.getElementById("price-icon")
    const stockDisplayTime = document.getElementById("time")
 
    stockDisplayName.textContent = `Name: ${stockData.name}`
    stockDisplaySymbol.textContent = `Symbol: ${stockData.sym}`
    stockDisplayPrice.textContent = `Price: ${stockData.price}`
    stockDisplayTime.textContent = `Time: ${stockData.time}`

    const priceNumeric = Number(stockData.price)
    const priceImg = priceNumeric > oldPrice ? 'green_triangle.png': priceNumeric < oldPrice ? 'red_triangle.png': 'grey_triangle.png'
    const priceIconElement = document.createElement('img')
    priceIconElement.src = `./icons/${priceImg}`
    priceIconElement.style.width = "100%"
    priceIconElement.alt = "price direction icon"
    stockDisplayPriceIcon.replaceChildren(priceIconElement)

    // if(Number(stockData.price) > oldPrice) {
    //     stockDisplayPriceIcon.innerHTML = `<img class="price-ico" src="icons/green_triangle.png" alt="up">`
    // }
    // else if(Number(stockData.price) < oldPrice) {
    //     stockDisplayPriceIcon.innerHTML = `<img class="price-ico" src="icons/red_triangle.png" alt="down">`
    // }
    // else {
    //     stockDisplayPriceIcon.innerHTML = `<img class="price-ico" src="icons/grey_triangle.png" alt="no change">`
    // }

    oldPrice = priceNumeric
}

setInterval(() => {
    const newStockData = getStockData()
    renderStockTicker(newStockData)
}, 1500);