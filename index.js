const terminal = document.getElementById("terminal");

input = "~/.local/bin/who_is.sh Pyry";

let isOn = false;

function print_lines(array, spell, callback) {
  if (!array.length) return;

  let command = document.getElementById("who_is");

  let i = 0;
  next();

  function next() {
    if (callback(array[i], i) != false) {
      command.innerHTML += array[i];
      if (++i < array.length) {
        const randomDelay = Math.floor(Math.random() * (540 - 380 + 1)) + 450;
        setTimeout(next, randomDelay);
      } else {
        setTimeout(end_credits, 750);
      }
    }
  }
}

function type(array, spell, callback) {
  if (!array.length) return;

  let command = document.getElementById("command");

  let i = 0;
  next();

  function next() {
    if (callback(array[i], i) != false) {
      command.innerHTML += array[i] === " " ? "&nbsp;" : array[i];
      if (++i < array.length) {
        const delay = getDelayForChar(array[i]);
        setTimeout(next, delay);
      } else {
        setTimeout(print_experience, 300);
      }
    }
  }
}

function getDelayForChar(char) {
  let delay = 40;
  if (char === " ") delay += 140; // short pause between words
  if (";|/~._".includes(char)) delay += 80; // dramatic effect!
  return delay + Math.floor(Math.random() * 60);
}

function print_experience() {
  document.getElementById("cursor").style.background = "#191724";

  const lines = [
    '<li class="info"> Alustetaan tietoja...</li>',
    '<li class="warn"> Ylisuunnittelu havaittu hakemistossa ~/.config</li>',
    '<li class="ok">   Järjestelmän valvoja</li>',
    '<li class="ok">   Automatisoinnin ystävä</li>',
    '<li class="ok">   Avoimen koodin puolustaja</li>',
    '<li class="info"> Tiedot ladattu</li>',
  ];

  function call_print() {
    print_lines(lines, true, function (element, index) {
      console.log(element, index);
    });
  }

  setTimeout(call_print, 750);
}

function blink() {
  const white = "#ffffff";
  const back_color = "#191724";
  const cursor = document.getElementById("blink_cursor");

  cursor.style.background = isOn ? back_color : white;
  isOn = !isOn;

  console.log(isOn);

  setTimeout(blink, 750);
}

function end_credits() {
  document.getElementById("visible").style.opacity = 1;
  document.getElementById("blink_cursor").style.background = "white";

  blink();
}

function calltype() {
  type(input, true, function (element, index) {
    console.log(element, index);
  });
}

setTimeout(calltype, 1000);
