export const util = {
  enterInput: (target, input, targetClass) => {
    target.classList.add("display-none");
    target.classList.remove("display-block");
    input.classList.remove(targetClass);
    input.classList.add("display-block");
    input.focus();
  },
  exitInput: (target, input, targetClass) => {
    target.classList.add("display-block");
    target.classList.remove("display-none");
    input.classList.remove("display-block");
    input.classList.add(targetClass);
  },
  saveInputValue: (event, localStorageKey, input, changeFieldVarValue) => {
    if (
      event.key === "Enter" &&
      event.currentTarget.value.replace(/\s+/g, "").length !== 0
    ) {
      console.log("Changed to : " + event.currentTarget.value);
      changeFieldVarValue(event.currentTarget.value);
      localStorage.setItem(localStorageKey, event.currentTarget.value);
      event.currentTarget.value = "";
      input.blur();
    }
  },
};
