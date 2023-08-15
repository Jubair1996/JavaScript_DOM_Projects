document
.getElementById("double-btn")
.addEventListener("click", function () {
  const inputField = document.getElementById("input-field");
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  const doubleValue = inputFieldValue * 2;

  if (isNaN(inputFieldValue)) {
    alert("Please provide a valid number");
    return;
  }

  const valueSetElement = document.getElementById("value-set");
  valueSetElement.innerText = doubleValue;
  inputField.value = " ";
});