function checkEligibility() {
  const age = document.getElementById("age").value;
  const result = document.getElementById("result");

  const message = age >= 18
    ? "✅ You are eligible to vote."
    : "❌ You are not eligible to vote.";

  result.textContent = message;
}
//if (age >= 18) {
  //result.textContent = "You are eligible to vote";
//} else {
  //result.textContent = "You are not eligible to vote";
//}
 