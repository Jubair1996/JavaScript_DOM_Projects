document.getElementById("triple-btn").addEventListener("click", function () {
  const inputField = document.getElementById("input-field");
  const inputFieldValueString = inputField.value;
  inputField.value = " ";
  const inputFieldValue = parseFloat(inputFieldValueString);

  if (isNaN(inputFieldValue)) {
    alert("Please provide a valid number");
    return;
  }
  const doubleValue = inputFieldValue * 3;
  const valueSetElement = document.getElementById("value-set");
  valueSetElement.innerText = doubleValue;
});
