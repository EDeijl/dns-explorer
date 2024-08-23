import("../pkg/index.js").catch(console.error).then((module) => {
  const submitButton = document.getElementById("submit");
  submitButton.onclick = () => {
    const input = document.getElementById("dns-input").value;
    const result = module.greet(input);
    document.getElementById("result").innerText = result
  }
});


