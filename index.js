/**
 * JS Playground implementation using new Function()
 */

function run() {
  const code = document.getElementById("code").value;
  let completed = function() {
    say("Completed!");
  };
  new Function(code)();
  completed();
}

function say(txt) {
  document
    .getElementById("previewArea")
    .insertAdjacentHTML("beforeend", `${txt}<br>`);
}
