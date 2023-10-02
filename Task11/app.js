// A: proud of you 🤠
const cars = [
  { value: "audi", text: "Audi" },
  { value: "mercedes", text: "Mercedes" },
  { value: "opel", text: "Opel" },
];
const root = document.getElementById("root");

const heading = document.createElement("h1");
heading.innerHTML = "Choose what you want:";

const form = document.createElement("form");

const select = document.createElement("select");
select.setAttribute("name", "cars");

cars.forEach((car) => {
  const option = document.createElement("option");
  option.value = car.value;
  option.innerHTML = car.text;
  select.appendChild(option);
});

const submitBtn = document.createElement("input");
submitBtn.type = "submit";
submitBtn.value = "Submit";
submitBtn.onclick = (event) => {
  event.preventDefault();
  result.innerHTML = `Selected car is: ${select.value}`;
};

const clearBtn = document.createElement("button");
clearBtn.innerHTML = "clear";
clearBtn.onclick = (event) => {
  event.preventDefault();
  result.textContent = `Selected car is: empty `;
};

const result = document.createElement("h3");
result.innerHTML = "Selected car is:";

root.append(heading, form);
form.append(select, submitBtn, result, clearBtn);
