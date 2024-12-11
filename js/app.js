import { setBackground } from "./backgroundImage.js";
import { setGreet } from "./greetings.js";
import { setMainFocus } from "./mainFocus.js";
import { setQuotes } from "./quotes.js";
import { getTime } from "./time.js";
import { setTodos } from "./todos.js";
import { util } from "./util.js";
import { setWeatherTemperature } from "./weather.js";

//#region Fields
const timeEl = document.querySelector(".middle-section__time");

const temperatureEl = document.querySelector(".temperature");

const greetingEl = document.querySelector(".middle-section__greeting");
const greetingInputEl = document.querySelector(".middle-section__name-input");

const mainFocusEl = document.querySelector(".middle-section__main-focus");
const mainFocusInputEl = document.querySelector(
  ".middle-section__main-focus-input"
);

const todosButtonEl = document.querySelector(".lower-section__button-todo");
const todosSectionEl = document.querySelector(".todos-section");
const todosInputEl = document.querySelector(".todos-section__todo-input");

const quotesEl = document.querySelector(".upper-section__quotes-p");
const quotesSwitchEl = document.querySelector("#quotes-switch-id");
const quotesInput = document.querySelector(".upper-section__quotes-input");

let name = localStorage.getItem("name")
  ? localStorage.getItem("name")
  : "Stanley";
let mainFocus = localStorage.getItem("mainFocus")
  ? localStorage.getItem("mainFocus")
  : "Set Your Main Focus By Clicking";
let todos = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];
let isQuotes = localStorage.getItem("isQuotes");
let myQuotes = localStorage.getItem("myQuotes")
  ? JSON.parse(localStorage.getItem("myQuotes"))
  : [];
//#endregion

//#region Start
timeEl.innerText = getTime();
setWeatherTemperature(temperatureEl);
setQuotes(quotesEl, isQuotes === "true" ? true : false, myQuotes);
quotesSwitchEl.checked = isQuotes === "true" ? true : false;
setGreet(greetingEl, name);
setMainFocus(mainFocusEl, mainFocus);
setTodos(todos);
setBackground();
//#endregion

//#region Events
greetingEl.addEventListener("click", () => {
  util.enterInput(greetingEl, greetingInputEl, "middle-section__name-input");
});
greetingInputEl.addEventListener("blur", () => {
  util.exitInput(greetingEl, greetingInputEl, "middle-section__name-input");
});
greetingInputEl.addEventListener("keydown", (event) => {
  util.saveInputValue(event, "name", greetingInputEl, (val) => {
    name = val;
  });
  setGreet(greetingEl, name);
});
//----------------------------------------------------------------------------------------------------------------------------
mainFocusEl.addEventListener("click", () => {
  util.enterInput(
    mainFocusEl,
    mainFocusInputEl,
    "middle-section__main-focus-input"
  );
});
mainFocusInputEl.addEventListener("blur", () => {
  util.exitInput(
    mainFocusEl,
    mainFocusInputEl,
    "middle-section__main-focus-input"
  );
});
mainFocusInputEl.addEventListener("keydown", (event) => {
  util.saveInputValue(event, "mainFocus", mainFocusInputEl, (val) => {
    mainFocus = val;
  });
  setMainFocus(mainFocusEl, mainFocus);
});
//----------------------------------------------------------------------------------------------------------------------------
todosButtonEl.addEventListener("click", () => {
  if (todosSectionEl.classList.contains("display-none")) {
    todosSectionEl.classList.add("display-block");
    todosSectionEl.classList.remove("display-none");
  } else {
    todosSectionEl.classList.remove("display-block");
    todosSectionEl.classList.add("display-none");
  }
});

todosInputEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !todos.includes(event.currentTarget.value)) {
    todos.push(event.currentTarget.value);
    event.currentTarget.value = "";
    console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));

    setTodos(todos);
  }
});
//----------------------------------------------------------------------------------------------------------------------------
quotesSwitchEl.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    isQuotes = true;
  } else {
    isQuotes = false;
  }
  localStorage.setItem("isQuotes", isQuotes);
});

quotesEl.addEventListener("click", () => {
  util.enterInput(quotesEl, quotesInput, "upper-section__quotes-input");
});
quotesInput.addEventListener("blur", () => {
  util.exitInput(quotesEl, quotesInput, "upper-section__quotes-input");
});

quotesInput.addEventListener("keydown", (event) => {
  if (
    event.key === "Enter" &&
    !myQuotes.includes(event.currentTarget.value) &&
    event.currentTarget.value.replace(/\s+/g, "").length !== 0
  ) {
    myQuotes.push(event.currentTarget.value);
    localStorage.setItem("myQuotes", JSON.stringify(myQuotes));
    quotesInput.blur();
    quotesEl.innerText = event.currentTarget.value;
    util.exitInput(quotesEl, quotesInput, "upper-section__quotes-input");
    event.currentTarget.value = "";
  }
});
//#endregion

//#region Update
// Time
setInterval(() => {
  timeEl.innerText = getTime();
  setBackground();
}, 60000);

// Weather
setInterval(() => {
  setWeatherTemperature(temperatureEl);
}, 60000 * 60);

setInterval(() => {}, 1000);
//#endregion
