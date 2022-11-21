console.log("rodando js");

window.onload = () => {
  let form = document.querySelector(".trabalhe-conosco");

  form.addEventListener("submit", (event) => {
    let errors = [];

    let inputNome = document.querySelector("#nome");
    let inputEmail = document.querySelector("#email");
    let inputTel = document.querySelector("#tel");

    if (inputNome.value == "") {
      errors.push("O campo nome não pode estar vazio");
    }

    if (inputEmail.value == "") {
      errors.push("O campo email não pode estar vazio");
    }

    if (inputTel.value == "") {
      errors.push("O campo telefone não pode estar vazio");
    }

    if (errors.length > 0) {
      event.preventDefault();
      console.log(errors);
    }
  });
};
