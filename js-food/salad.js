// time to handle some real fun stuff. But let's complete something about the CSS of the page

const addForm = document.getElementById("input-form");

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // We implement this line of code to prevent the form from behaving in teh default manner by trying to sumbit to a file or something that usually causes the form to reload. Nobody wants that.

  const textInput = document.getElementById("inputBox").value;
  let numberOfText = Number(textInput);
  let resultBox = document.getElementById("result");
  let divMessage = document.getElementById('message')

  //  We are going to use simple recursive algorithm to make some simple magic here

  const makeHumus = (factor) => {
    const ingredient = (amount, unit, name) => {
      let ingredientAmount = amount * factor;
      if (ingredientAmount > 1) {
        unit += "s";
      }

      if (!numberOfText || numberOfText == NaN) {
        resultBox.innerHTML = "Please input a valid number";
      } else {
        divMessage.innerHTML = `<b>To make ${numberOfText} plate(s) of salad, you need:</b>`
        resultBox.innerHTML += ` ${ingredientAmount} ${unit} of ${name} \n`;
      }
    };
    ingredient(0.5, "can", "cheese");
    ingredient(0.25, "basket", "melon");
    ingredient(3, "crate", "eggs");
    ingredient(5, "spoon", "sugar");
    ingredient(8, "satchet", "scramble egg");
  };
  makeHumus(numberOfText);
});

addForm.addEventListener("reset", (e) => {
  e.preventDefault();
  const textInput = document.getElementById("inputBox");
  let resultBox = document.getElementById("result");
  let divMessage = document.getElementById('message')
  textInput.innerText = "";
  resultBox.innerHTML = "";
  divMessage.innerHTML = "";
});

// Packs of salads really, Maybe we should consider using some other means