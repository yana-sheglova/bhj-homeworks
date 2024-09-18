const editor = document.getElementById("editor");
const clearBtn = document.getElementById("clearBtn");

window.onload = () => {
  let savedText = localStorage.getItem("editorContent");
  if (savedText) {
    editor.value = savedText;
  }
};

editor.addEventListener("input", () => {
  localStorage.setItem("editorContent", editor.value)
});


clearBtn.addEventListener("click", () => {
  editor.value = "";
  localStorage.removeItem("editorContent");
});