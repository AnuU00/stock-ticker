function randomPrice() {
    return (Math.random() * 3).toFixed(2)
}

function getStockData() {
    const now = new Date()
    return {
        name: "QtechAI",
        sym: "QTA",
        price: randomPrice(),
        time: now.toLocaleTimeString('en-GB')
    }
}

setInterval(() => {
    randomPrice()
}, 1500);

export default getStockData