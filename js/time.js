export const getTime = () => {
  console.log(new Date().getMinutes().toString().length);
  return (
    new Date().getHours().toString() +
    ":" +
    (new Date().getMinutes().toString().length === 1
      ? "0" + new Date().getMinutes().toString()
      : new Date().getMinutes().toString())
  );
};
