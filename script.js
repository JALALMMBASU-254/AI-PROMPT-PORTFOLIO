function copyPrompt(id) {
  const promptText = document.getElementById(id).innerText;
  navigator.clipboard.writeText(promptText).then(() => {
    alert("Prompt copied to clipboard!");
  });
}
