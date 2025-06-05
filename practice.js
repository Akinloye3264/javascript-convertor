/* This file is to improve the javascript to look like an actual website and add buttons for inputing value to convert from, to, and do the conversion and print result = the answer */


function converter() {
    
    
    const currencies = {
        USD: 1.0,
        JPY: 113.5,
        EUR: 0.89,
        RUB: 74.36,
        GBP: 0.75,
        RWF: 9.86,
        NRA: 1200,
        SHL: 2900,
    }
    
    let from_currency = document.querySelector("#from").value.toUpperCase()
    let to_currency = document.querySelector("#to").value.toUpperCase()
    let amount = parseFloat(document.querySelector("#amount").value)
    const convertedAmount = ((amount / currencies[to_currency]) * currencies[from_currency]).toFixed(2)
    result.innerHTML = `${convertedAmount}`
    
}

