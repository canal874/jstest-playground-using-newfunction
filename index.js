/**
 * JS Playground implementation using new Function()
 */

function run() {
  const code = document.getElementById("code").value;
  let completed = function() {
    document
      .getElementById("previewArea")
      .insertAdjacentHTML("beforeend", "Completed!<br>");
  };
  new Function(code)();
  completed();
}

function say(txt) {
  document
    .getElementById("previewArea")
    .insertAdjacentHTML("beforeend", `${txt}<br>`);
}
