const quotes = [
    {
        quote: "VTNR",
        author: "vertex energy",
    },
    {
        quote: "OXY",
        author: "occidental",
    },
    {
        quote: "XOM",
        author: "exxon mobil",
    },
    {
        quote: "CVX",
        author: "chevron",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;