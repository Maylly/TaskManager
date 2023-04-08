const input = document.querySelector("#texto");
const btnSend = document.querySelector(".button1");

const listTarefas = document.querySelector(".lista");
const btnSort = document.querySelector(".sortear");

const selected = document.querySelector(".result");

input.addEventListener("input", () => {
  if (input.value.length == 0) {
    btnSend.disabled = true;
    btnSend.classList.add("disabled");
  } else {
    btnSend.disabled = false;
    btnSend.classList.remove("disabled");
  }
});

btnSend.addEventListener("click", () => {
  const item = document.createElement("li");
  item.innerText = input.value;

  listTarefas.querySelector("ul").appendChild(item);
  listTarefas.classList.remove("hide");

  btnSort.classList.remove("hide");

  input.value = "";
  btnSend.disabled = true;
  btnSend.classList.add("disabled");
});

btnSort.addEventListener("click", () => {
  const listItems = listTarefas.querySelectorAll("li");
  const itemsArray = Array.from(listItems);

  const selectedItem = itemsArray[Math.floor(Math.random() * listItems.length)];
  selected.innerText = selectedItem.innerText;

  selected.classList.remove("hide");
});