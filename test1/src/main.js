const { invoke } = window.__TAURI__.tauri;


let result;
let final_string="";
let history = "";


let history_selector = document.getElementById('history-tag');

let display = document.getElementById('results');

async function calculate() {
  result = await invoke("calculate", { e: display.value });
  history += final_string + "<br>" + result + "<br>";
  history_selector.innerHTML=history;
  final_string=result;
  display.value =result;
}

window.addEventListener("DOMContentLoaded", () => {



  document
    .querySelector("#eight")
    .addEventListener('click', () => {
      final_string += '8';
      display.value = final_string;
    });
  document
  .querySelector("#seven")
  .addEventListener('click', () => {
    final_string += '7';
    display.value = final_string;
  });
  document
  .querySelector("#six")
  .addEventListener('click', () => {
    final_string += '6';
    display.value = final_string;
  });
  document
  .querySelector("#five")
  .addEventListener('click', () => {
    final_string += '5';
    display.value = final_string;
  });
  document
  .querySelector("#four")
  .addEventListener('click', () => {
    final_string += '4';
    display.value = final_string;
  });
  document
  .querySelector("#three")
  .addEventListener('click', () => {
    final_string += '3';
    display.value = final_string;
  });
  document
  .querySelector("#two")
  .addEventListener('click', () => {
    final_string += '2';
    display.value = final_string;
  });
  document
  .querySelector("#one")
  .addEventListener('click', () => {
    final_string += '1';
    display.value = final_string;
  });
  document
  .querySelector("#nine")
  .addEventListener('click', () => {
    final_string += '9';
    display.value = final_string;
  });
  document
  .querySelector("#zero")
  .addEventListener('click', () => {
    final_string += '0';
    display.value = final_string;
  });
  document
    .querySelector("#coma")
    .addEventListener('click', () => {
      final_string += '.';
      display.value = final_string;
    });



    document
    .querySelector("#mul")
    .addEventListener('click', () => {
      final_string += '*';
      display.value = final_string;
    });
    document
    .querySelector("#plus")
    .addEventListener('click', () => {
      final_string += '+';
      display.value = final_string;
    });
    document
    .querySelector("#minus")
    .addEventListener('click', () => {
      final_string += '-';
      display.value = final_string;
    });
    document
    .querySelector("#divide")
    .addEventListener('click', () => {
      final_string += '/';
      display.value = final_string;
    });
    document
    .querySelector("#clear")
    .addEventListener('click', () => {
      final_string = '';
      display.value = final_string;
    });
    document
    .querySelector("#equal")
    .addEventListener('click', calculate);
});