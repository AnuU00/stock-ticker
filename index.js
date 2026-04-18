import getStockData from "./fakeStockAPI.js"

let oldPrice = 0

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

    if(Number(stockData.price) > oldPrice) {
        stockDisplayPriceIcon.innerHTML = `<img class="price-ico" src="icons/green_triangle.png" alt="up">`
    }
    else if(Number(stockData.price) < oldPrice) {
        stockDisplayPriceIcon.innerHTML = `<img class="price-ico" src="icons/red_triangle.png" alt="down">`
    }
    else {
        stockDisplayPriceIcon.innerHTML = `<img class="price-ico" src="icons/grey_triangle.png" alt="no change">`
    }
    oldPrice = stockData.price
}

setInterval(() => {
    const newStockData = getStockData()
    renderStockTicker(newStockData)
}, 1500);