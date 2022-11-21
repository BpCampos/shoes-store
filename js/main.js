console.log("rodando js");

window.onload = () => {
  //focus
  let fieldName = document.querySelector("#nome");

  fieldName.addEventListener("focus", () => {
    fieldName.style.border = "2px solid green";
  });
};
