// let ExchangeRate = require('./function').exchange;
// let StockPrice = require('./function').price;
const fetch = require('./node_modules/node-fetch');
let key = '88F1W20ZOPP83RZ6';

let functionToCall = process.argv[2];


if( functionToCall == 'exchange'){
    exchange(process.argv[3], process.argv[4]);
} 
if( functionToCall == 'price'){
    price(process.argv[3]);
}



async function exchange(currencyA, currencyB){
    if(typeof(currencyA) != "string" || typeof(currencyB) != "string"){
        console.log("Not a currency");
        return;
    }
    let res = await fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${currencyA}&to_currency=${currencyB}&apikey=${key}`);
    let val = await res.json();
    console.log(val);
}
async function price(symbol){
    if(typeof(symbol) != "string"){
        console.log("Not a symbol");
        return;
    }
    let res = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${key}`);
    let val = await res.json();
    // if (val['Global Quote']['09. change'] < 0){
    //     // console.log(`\x1b[31m${val}\x1b[0m`);
    //     console.log(val);
    //     return;
    // }
    console.log(val);
}
