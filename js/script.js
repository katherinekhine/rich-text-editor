let optionButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

// List of font list
let fontList = [
  "Arial",
  "Times New Roman",
  "Verdana",
  "Courier New",
  "Georgia",
  "cursive",
  "Garamond",
];

// Initial Settings
const initializer = () => {
  highlighter(alignButtons, true);
  highlighter(spacingButtons, false);
  highlighter(formatButtons, false);
  highlighter(scriptButtons, false);
};
