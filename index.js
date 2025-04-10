const quotes = [
    {
      text: "The best way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      text: "You don’t have to be great to start, but you have to start to be great.",
      author: "Zig Ziglar"
    },
    {
      text: "The most courageous act is still to think for yourself. Aloud.",
      author: "Coco Chanel"
    },
    {
      text: "If you’re going through hell, keep going.",
      author: "Winston Churchill"
    },
    {
      text: "Creativity is intelligence having fun.",
      author: "Albert Einstein"
    },
    {
      text: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein"
    },
    {
      text: "Done is better than perfect.",
      author: "Sheryl Sandberg"
    },
    {
      text: "Build things you wish existed.",
      author: "Sahil Lavingia"
    }
];

const generateBtn = document.getElementById("generate-btn");
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");

function generateQuote() {
    const randomQuote = Math.floor(Math.random()*quotes.length);
    let selectedQuote = quotes[randomQuote].text;
    quoteText.textContent = `${selectedQuote}`
};

generateBtn.addEventListener("click", () => {
    generateQuote();
});