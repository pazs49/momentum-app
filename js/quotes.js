export const setQuotes = async (target, isMyQuotes, myQuotes) => {
  if (!isMyQuotes) {
    try {
      const response = await fetch("https://quotes-api-self.vercel.app/quote");
      const data = await response.json();
      target.innerText = "❝ " + data.quote + " ❞";
    } catch (err) {
      console.log(err);
    }
  } else {
    target.innerText =
      myQuotes.length !== 0
        ? "❝ " + myQuotes[Math.ceil(Math.random() * myQuotes.length - 1)] + " ❞"
        : "Click to add your own quotes.";
  }
};
