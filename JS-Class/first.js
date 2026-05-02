

let prices = [12, 23, 34, 54, 56]
let new_prices = []
let i = 0;

while (i <= prices.length - 1) {
    new_prices.push(prices[i] + 1)
    i++;
}
console.log(new_prices)