// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

// purchaseEl = document.getElementById("purchase-btn").onclick =
//   "console.log('Error')";
errorEl = document.getElementById("error");

function showError() {
  let errorStr = "Something went wrong, please try again";
  errorEl.textContent = errorStr;
  console.log("Show error");
}
