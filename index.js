document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.querySelector('input[name="Name"]');
  const emailInput = document.querySelector('input[name="Email"]');
  const submitButton = document.getElementById("submit-button");

  function toggleButtonVisibility() {
    if (nameInput.value.trim() !== "" && emailInput.value.trim() !== "") {
      submitButton.classList.add("visible");
    } else {
      submitButton.classList.remove("visible");
    }
  }

  // Add event listeners to all input fields
  nameInput.addEventListener("input", toggleButtonVisibility);
  emailInput.addEventListener("input", toggleButtonVisibility);
});
