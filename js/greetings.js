export const setGreet = (element, name) => {
  const greetIntros = ["My Lord", "Greetings", "My King", "Hello", "Hi"];
  element.innerText =
    greetIntros[Math.ceil(Math.random() * greetIntros.length - 1)] +
    ", " +
    name;
};
