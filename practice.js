// /* This file is to improve the javascript to look like an actual website and add buttons for inputing value to convert from, to, and do the conversion and print result = the answer */



const currencies = {
    USD: 1,
    JPY: 157.5,
    EUR: 0.92,
    RUB: 89.5,
    GBP: 0.78,
    RWF: 1300,
    NRA: 800,
    SHL: 140,
    CAD: 1.36,
    AUD: 1.52,
    INR: 83.5,
    CNY: 7.25,
    KRW: 1370,
    ZAR: 18.2,
    NGN: 1500,
    BRL: 5.4,
    MXN: 18.2,
    CHF: 0.89,
    SEK: 10.5,
    AED: 3.67
};

function converter() {
    let from_currency = document.querySelector("#from").value.toUpperCase();
    let to_currency = document.querySelector("#to").value.toUpperCase();
    let amount = parseFloat(document.querySelector("#amount").value);
    const result = document.getElementById("result"); 

    if (
        isNaN(amount) ||
        !currencies[from_currency] ||
        !currencies[to_currency]
    ) {
        result.innerHTML = "Please enter a valid amount and select currencies.";
        return;
    }

    const convertedAmount = ((amount / currencies[from_currency]) * currencies[to_currency]).toFixed(2);
    result.innerHTML = `${amount} ${from_currency} = ${convertedAmount} ${to_currency}`;
}

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY

// const ROVER = "curiosity"
// const SOL = 1000
// const API_KEY = "DEMO_KEY" 
// const FileSystem = require('fs'); 
// const CAMERA = "FHAZ" 
// const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${ROVER}/photos?sol=${SOL}&api_key=${API_KEY}&camera=${CAMERA}`

// fetch(URL).then(function(response) {
//     if (!response.ok) {
//         throw new Error("Network response was not ok " + response.statusText);
//     }
//     return response.json();
// }).then(function(data) {
//     const img_url = data.photos[0].img_src;
//     fetch(img_url).then(function(response) {
//         if (!response.ok) {
//             throw new Error("Network response was not ok " + response.statusText);
//         }
//         return response.blob();
//     }).then(function(binary){
//         FileSystem.writeFile("mars_photo.jpg", binary, function(err) {
//             if (err) {
//                 console.error("Error writing file:", err);
//             } else {
//                 console.log("Mars photo saved successfully!");
//             }
//         });
//     })})